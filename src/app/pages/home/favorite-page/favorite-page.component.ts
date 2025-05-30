import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {IBookModel} from "@core/models/ibook.model";
import {BookFacade} from "@core/store/facade/book/book-facade.service";
import {BookCardComponent} from "@app/pages/home/favorite-page/components/book-card/book-card.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {tap} from "rxjs";

@Component({
  selector: 'app-favorite-page',
    imports: [
        BookCardComponent

    ],
  templateUrl: './favorite-page.component.html',
  styleUrl: './favorite-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritePageComponent implements OnInit{

    favoriteBooks: IBookModel[] = [];
    private destroyRef = inject(DestroyRef);


    constructor(
        private bookFacade: BookFacade
    ) {
    }

    ngOnInit(): void {
        this.bookFacade.getFavoriteBooks()
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                tap(data => this.favoriteBooks = data)
            )
            .subscribe();
    }



}
