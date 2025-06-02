import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState } from '@core/store/reducers/books.reducer';

export const selectBooksState = createFeatureSelector<BooksState>('books');

export const selectFavoriteBooks = createSelector(
    selectBooksState,
    (state) => state.favoriteBooks
);

export const selectRecentBooks = createSelector(
    selectBooksState,
    (state) => state.recentBooks
);
