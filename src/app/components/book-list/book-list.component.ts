// book-list.component.ts

import {Component, OnInit, ElementRef, AfterViewInit, input} from '@angular/core';
import {IBookModel} from '@app/model/ibook.model';
import {BookCardComponent} from '@app/components/book-card/book-card.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
    selector: 'app-book-list',
    imports: [
        BookCardComponent,
        ScrollingModule
    ],
    templateUrl: './book-list.component.html',
    styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit, AfterViewInit {

    readonly books = input<IBookModel[]>([]);

    constructor(private elRef: ElementRef) {}

    ngOnInit(): void {
        console.log('temp')
    }

    ngAfterViewInit(): void {
        const viewport = this.elRef.nativeElement.querySelector('.book-list-viewport');
        if (viewport) {
            viewport.addEventListener('wheel', (event: WheelEvent) => {
                if (event.deltaY !== 0) {
                    event.preventDefault();
                    viewport.scrollLeft += event.deltaY;
                }
            });
        }
    }
}
