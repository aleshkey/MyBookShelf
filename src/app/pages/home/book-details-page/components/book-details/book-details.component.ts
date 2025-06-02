import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '@core/api/book/book.service';
import {IBookModel} from '@core/models/ibook.model';
import {StarRatingComponent} from '@app/ui-components/star-rating/star-rating.component';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AuthorInfoComponent} from "@app/pages/home/book-details-page/components/author-info/author-info.component";
import {BookFacade} from "@core/store/facade/book/book-facade.service";
import {catchError, of, tap} from "rxjs";

@Component({
    selector: 'app-book-details',
    imports: [
        StarRatingComponent,
        AuthorInfoComponent
    ],
    templateUrl: './book-details.component.html',
    styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {

    private destroyRef = inject(DestroyRef);

    book?: IBookModel;

    authors?: string[];

    constructor(
        private route: ActivatedRoute,
        private bookService: BookService,
        private bookFacade: BookFacade
    ) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');

        this.bookService.getBookInfo(id!)
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                tap((data: IBookModel) => {
                    this.book = data;
                    this.bookFacade.addRecentBook(this.book);
                    this.authors = this.book?.volumeInfo?.authors;
                }),
                catchError((err) => {
                    console.log(err);
                    return of(null);
                })
            )
            .subscribe();
    }

    onRatingChange(newRating: number) {
        console.log(`New Rating: ${newRating}`);
    }

}
