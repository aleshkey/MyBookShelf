import {Component, OnInit} from '@angular/core';
import {QuoteSliderComponent} from '@app/pages/home/dashboard/components/quote-slider/quote-slider.component';
import {BookListComponent} from '@app/components/book-list/book-list.component';
import {BookService} from '@app/service/rest/book/book.service';
import {IBookModel} from '@app/model/ibook.model';
import {Store} from '@ngrx/store';
import {selectBooks} from '@app/utils/actions/books.selectors';

@Component({
    selector: 'app-dashboard',
    imports: [
        QuoteSliderComponent,
        BookListComponent
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

    books: IBookModel[] = [];
    recentBooks: IBookModel[] = [];

    constructor(
        private bookService: BookService,
        private store: Store
    ) {}

    ngOnInit(): void {
        this.store.select(selectBooks)
            .subscribe({
                next: (books) => {
                    this.recentBooks = books;
                },
                error: (error) => {
                    console.error('Error fetching books:', error);
                },
            });
        this.bookService.getRecommended()
            .subscribe({
                next: (response) => {
                    console.log('Dashboard received books:', response);
                    this.books = response.items;
                },
                error: (error) => {
                    console.error('Error fetching books:', error);
                },
            });
    }

}
