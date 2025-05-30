import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {GoogleBookIframeComponent} from "@app/pages/home/webreader/components/google-book-iframe/google-book-iframe.component";
import {ActivatedRoute} from "@angular/router";
import {IBookModel} from "@core/models/ibook.model";
import {BookService} from "@core/api/book/book.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {tap} from "rxjs";

@Component({
    selector: 'app-webreader',
    imports: [
        GoogleBookIframeComponent
    ],
    templateUrl: './webreader.component.html',
    styleUrl: './webreader.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebreaderComponent implements OnInit {

    bookId: string | null = "";
    private destroyRef = inject(DestroyRef);
    book = signal<IBookModel | null>(null);

    constructor(
        private route: ActivatedRoute,
        private bookService: BookService
    ) {
    }

    ngOnInit(): void {
        this.bookId = this.route.snapshot.paramMap.get('id');
        this.bookService.getBookInfo(this.bookId!)
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                tap(data => {
                    this.book.set(data);
                    console.log(this.book);
                })
            )
            .subscribe();
    }

}
