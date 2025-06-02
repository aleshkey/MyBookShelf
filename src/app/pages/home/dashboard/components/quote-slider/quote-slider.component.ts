import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {IQuote} from '@core/models/iquote.model';
import {QuoteService} from "@core/api/quote/quote.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {interval, Subject, takeUntil, tap} from "rxjs";


@Component({
    selector: 'app-quote-slider',
    templateUrl: './quote-slider.component.html',
    imports: [],
    styleUrls: ['./quote-slider.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteSliderComponent implements OnInit, OnDestroy {

    quotes!: IQuote[];
    currentIndex = 0;
    intervalId?: ReturnType<typeof setInterval>;
    private destroy$ = new Subject<void>();
    private destroyRef = inject(DestroyRef);

    constructor(
        private quoteService: QuoteService
    ) {
    }

    ngOnInit(): void {
        this.quoteService.getRandomQuotes()
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                tap((quotes) => {
                    this.quotes = quotes;
                    this.startAutoSlide();
                })
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }

    startAutoSlide(): void {
        interval(5000)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.currentIndex = (this.currentIndex + 1) % this.quotes.length;
            });
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
