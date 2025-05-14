import {Component, input, OnInit} from '@angular/core';
import {IBookModel} from '@app/model/ibook.model';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-book-card',
    imports: [
        RouterLink
    ],
    templateUrl: './book-card.component.html',
    styleUrl: './book-card.component.css'
})
export class BookCardComponent implements OnInit {
    ngOnInit(): void {
        console.log(`BookCardComponent init title: ${this.book()?.volumeInfo?.title}, esbn ${this.book()?.volumeInfo?.industryIdentifiers?.[0]?.identifier}`);
    }
    book = input<IBookModel>();
}
