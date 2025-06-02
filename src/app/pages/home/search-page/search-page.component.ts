import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {BookTableComponent} from "@app/pages/home/search-page/components/book-table/book-table.component";
import {IBookModel} from "@core/models/ibook.model";
import {BookFacade} from "@core/store/facade/book/book-facade.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {tap} from "rxjs";

@Component({
    selector: 'app-search-page',
    imports: [
        BookTableComponent
    ],
    templateUrl: './search-page.component.html',
    styleUrl: './search-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit {

    searchedBooks: IBookModel[] = [];
    private destroyRef = inject(DestroyRef);


    constructor(private bookFacade: BookFacade) {
    }

    ngOnInit(): void {
        this.bookFacade.getRecentBooks()
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                tap(data => {
                    console.log(data);
                    this.searchedBooks = data;
                })
            )
            .subscribe();
    }

}
