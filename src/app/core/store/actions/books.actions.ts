import { createAction, props } from '@ngrx/store';
import {IBookModel} from '@core/models/ibook.model';

export const addRecentBook = createAction(
    '[Books] Add Recent Book',
    props<{ book: IBookModel }>()
);

export const removeRecentBook = createAction(
    '[Books] Remove Recent Book',
    props<{ bookId: string }>()
);

export const clearRecentBooks = createAction('[Books] Clear Recent Books');


export const addFavoriteBook = createAction(
    '[Books] Add Favorite Book',
    props<{ book: IBookModel }>()
);

export const removeFavoriteBook = createAction(
    '[Books] Remove Favorite Book',
    props<{ bookId: string }>()
);

export const clearFavoriteBooks = createAction('[Books] Clear Favorite Books');
