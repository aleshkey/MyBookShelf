// src/app/store/books/books.actions.ts
import { createAction, props } from '@ngrx/store';
import {IBookModel} from '@app/model/ibook.model';

export const addRecentBook = createAction(
    '[Books] Add Recent Book',
    props<{ book: IBookModel }>()
);

export const removeRecentBook = createAction(
    '[Books] Remove Recent Book',
    props<{ bookId: string }>()
);

export const clearRecentBooks = createAction('[Books] Clear Recent Books');
