import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {IBookModel} from "@core/models/ibook.model";
import {BookFacade} from "@core/store/facade/book/book-facade.service";

@Component({
    selector: 'app-book-row',
    templateUrl: './book-row.component.html',
    styleUrl: './book-row.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookRowComponent {
    liked = false;
    book = input<IBookModel>();

    constructor(private bookFacade: BookFacade) {
    }

    onPreview() {

    }

    toggleLike() {
        this.liked = !this.liked;
        this.bookFacade.addFavoriteBook(this.book()!);
    }
}
