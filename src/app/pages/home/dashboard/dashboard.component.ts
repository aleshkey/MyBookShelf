import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {QuoteSliderComponent} from '@app/pages/home/dashboard/components/quote-slider/quote-slider.component';
import {BookListComponent} from '@app/ui-components/book-list/book-list.component';
import {BookService} from '@core/api/book/book.service';
import {IBookModel} from '@core/models/ibook.model';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {BookFacade} from "@core/store/facade/book/book-facade.service";
import {catchError, of, tap} from "rxjs";

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
    destroyRef = inject(DestroyRef);


    constructor(
        private bookService: BookService,
        private bookFacade: BookFacade
    ) {
    }

    ngOnInit(): void {
        this.bookFacade.getRecentBooks()
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                tap((books) => this.recentBooks = books),
                catchError((error) => {
                    console.error('Error fetching recent books:', error);
                    return of([]);
                })
            )
            .subscribe();

        this.bookService.getRecommended()
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                tap((response) => {
                    console.log('Dashboard received books:', response);
                    this.books = response.items;
                }),
                catchError((error) => {
                    console.error('Error fetching recommended books:', error);
                    return of({ items: [] });
                })
            )
            .subscribe();
    }

}
