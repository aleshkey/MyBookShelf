// src/app/store/books/books.reducer.ts
import { createReducer, on } from '@ngrx/store';
import {addRecentBook, clearRecentBooks, removeRecentBook} from './books.actions';
import { IBookModel } from '@app/model/ibook.model';

export interface BooksState {
    books: IBookModel[];
}

const initialState: BooksState = {
    books: []
};

export const booksReducer = createReducer(
    initialState,
    on(addRecentBook, (state, { book }) => {
        if (state.books.length >= 10 || state.books.includes(book)) {
            return state;
        }

        return {
            ...state,
            books: [book, ...state.books]
        };
    }),
    on(removeRecentBook, (state, { bookId }) => ({
        ...state,
        books: state.books.filter(b => b.id !== bookId)
    })),
    on(clearRecentBooks, (state) => ({
        ...state,
        books: []
    }))
);
