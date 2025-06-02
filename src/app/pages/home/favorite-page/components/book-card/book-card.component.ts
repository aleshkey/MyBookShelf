import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {IBookModel} from "@core/models/ibook.model";

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent {
    book = input<IBookModel>();
}
