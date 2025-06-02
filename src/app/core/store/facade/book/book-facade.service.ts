import {Injectable} from '@angular/core';
import {IBookModel} from "@core/models/ibook.model";
import {Store} from "@ngrx/store";
import {addFavoriteBook, addRecentBook, removeFavoriteBook, removeRecentBook} from '@core/store/actions/books.actions';
import {Observable} from "rxjs";
import {selectFavoriteBooks, selectRecentBooks} from "@core/store/selectors/books.selectors";

@Injectable({
    providedIn: 'root'
})
export class BookFacade {

    constructor(
        private store: Store
    ) {
    }

    addRecentBook(book: IBookModel) {
        this.store.dispatch(addRecentBook({book}));
    }

    removeBook(bookId: string) {
        this.store.dispatch(removeRecentBook({bookId}));
    }

    getRecentBooks(): Observable<IBookModel[]> {
        return this.store.select(selectRecentBooks);
    }


    addFavoriteBook(book: IBookModel) {
        this.store.dispatch(addFavoriteBook({book}));
    }

    removeFavoriteBook(bookId: string) {
        this.store.dispatch(removeFavoriteBook({bookId}));
    }

    getFavoriteBooks(): Observable<IBookModel[]> {
        return this.store.select(selectFavoriteBooks);
    }

}
