import {Component, EventEmitter, input, OnInit, output, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
    selector: 'app-star-rating',
    imports: [
        NgClass
    ],
    templateUrl: './star-rating.component.html',
    styleUrl: './star-rating.component.css'
})
export class StarRatingComponent implements OnInit {
    readonly rating = input<number>(0);
    readonly maxRating = input<number>(5);
    ratingChange = output<number>()

    stars: number[] = [];

    ngOnInit() {
        this.stars = Array(this.maxRating()).fill(0);
    }

    setRating(rating: number) {
        this.rating.apply(rating);
        this.ratingChange.emit(this.rating());
    }
}
