import {ChangeDetectionStrategy, Component, input, OnInit} from '@angular/core';
import {IBookModel} from '@core/models/ibook.model';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-book-card',
    imports: [
        RouterLink
    ],
    templateUrl: './book-card.component.html',
    styleUrl: './book-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent implements OnInit {
    ngOnInit(): void {}

    book = input<IBookModel>();
}
