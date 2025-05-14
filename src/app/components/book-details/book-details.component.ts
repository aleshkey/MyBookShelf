import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '@app/service/rest/book/book.service';
import {IBookModel} from '@app/model/ibook.model';
import {StarRatingComponent} from '@app/components/star-rating/star-rating.component';

@Component({
    selector: 'app-book-details',
    imports: [
        StarRatingComponent
    ],
    templateUrl: './book-details.component.html',
    styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {

    book?: IBookModel;

    constructor(
        private route: ActivatedRoute,
        private bookService: BookService
    ) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.bookService.getBookInfo(id!)
            .subscribe({
                next: (data: IBookModel) => {
                    console.log(data);
                    this.book = data;
                    this.bookService.addRecentBook(this.book);
                    console.log(this.book);
                },
                error: (err) => {
                    console.log(err)
                }
            });
    }

    onRatingChange(newRating: number) {
        console.log(`New Rating: ${newRating}`);
    }

}
