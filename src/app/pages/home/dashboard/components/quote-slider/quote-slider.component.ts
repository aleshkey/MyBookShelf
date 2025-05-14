import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
    selector: 'app-quote-slider',
    templateUrl: './quote-slider.component.html',
    imports: [],
    styleUrls: ['./quote-slider.component.css']
})
export class QuoteSliderComponent implements OnInit, OnDestroy {
    quotes = [
        { text: 'There is more treasure in books than in all the pirate’s loot on Treasure Island.', author: 'Walt Disney' },
        { text: 'The only thing you absolutely have to know is the location of the library.', author: 'Albert Einstein' },
        { text: 'A reader lives a thousand lives before he dies.', author: 'George R.R. Martin' },
        { text: 'Books are a uniquely portable magic.', author: 'Stephen King' }
    ];

    currentIndex = 0;
    intervalId?: ReturnType<typeof setInterval>;

    ngOnInit(): void {
        this.startAutoSlide();
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }

    startAutoSlide(): void {
        this.intervalId = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.quotes.length;
        }, 5000);
    }

    goToSlide(index: number): void {
        this.currentIndex = index;
        this.resetInterval();
    }

    resetInterval(): void {
        clearInterval(this.intervalId);
        this.startAutoSlide();
    }
}
