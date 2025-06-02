import {createReducer, on} from '@ngrx/store';
import {
    addFavoriteBook,
    addRecentBook,
    clearFavoriteBooks,
    clearRecentBooks,
    removeFavoriteBook,
    removeRecentBook
} from '@core/store/actions/books.actions';
import {IBookModel} from '@core/models/ibook.model';

export interface BooksState {
    recentBooks: IBookModel[];
    favoriteBooks: IBookModel[];
}

const initialState: BooksState = {
    recentBooks: [],
    favoriteBooks: []
};

export const booksReducer = createReducer(
    initialState,
    on(addRecentBook, (state, {book}) => {
        if (
            state.recentBooks.length >= 10 ||
            state.recentBooks.some(b => b.id === book.id)
        ) {
            return state;
        }

        return {
            ...state,
            recentBooks: [book, ...state.recentBooks]
        };
    }),
    on(removeRecentBook, (state, {bookId}) => ({
        ...state,
        recentBooks: state.recentBooks.filter(b => b.id !== bookId)
    })),
    on(clearRecentBooks, (state) => ({
        ...state,
        recentBooks: []
    })),

    on(addFavoriteBook, (state, {book}) => {
        return {
            ...state,
            favoriteBooks: [book, ...state.favoriteBooks]
        }
    }),
    on(removeFavoriteBook, (state, {bookId}) => ({
        ...state,
        favoriteBooks: state.favoriteBooks.filter(b => b.id !== bookId)
    })),
    on(clearFavoriteBooks, (state) => ({
        ...state,
        favoriteBooks: []
    })),
)
