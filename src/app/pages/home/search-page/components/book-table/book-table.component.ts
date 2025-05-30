import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {IBookModel} from "@core/models/ibook.model";
import {BookRowComponent} from "@app/pages/home/search-page/components/book-row/book-row.component";

@Component({
  selector: 'app-book-table',
    imports: [
        BookRowComponent
    ],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookTableComponent {
    bookList = input<IBookModel[]>([]);

}
