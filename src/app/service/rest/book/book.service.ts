import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBookModel} from '@app/model/ibook.model';
import {Store} from '@ngrx/store';
import {addRecentBook, removeRecentBook} from '@app/utils/actions/books.actions';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    private readonly baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    private readonly queryParams = {
        title: 'intitle',
        author: 'inauthor',
        subjects: 'subject',
        text: 'q',
        isbn: 'isbn',
    } as const;

    constructor(
        private http: HttpClient,
        private store: Store
    ) {}

    public search({type, value}: { type: keyof typeof BookService.prototype.queryParams; value: string }): Observable<IBookModel[]> {
        return this.http.get<IBookModel[]>(this.buildSearchUrl({type, value}));
    }

    private buildSearchUrl({type, value}: { type: keyof typeof BookService.prototype.queryParams; value: string }): string {
        const field = this.queryParams[type];
        const encodedValue = encodeURIComponent(value).replace(/%20/g, '+');

        const qParam = field === 'q'
            ? encodedValue
            : `${field}:${encodedValue}`;
        return `${this.baseUrl}?q=${qParam}`;
    }

    public getBookInfo(id: string): Observable<IBookModel> {
        return this.http.get<IBookModel>(`${this.baseUrl}/${id}`);
    }

    public getRecommended(): Observable<any> { //todo change any type
        return this.http.get(this.baseUrl + '?q=programming&maxResults=10')
    }

    addRecentBook(book: IBookModel) {
        this.store.dispatch(addRecentBook({ book }));
    }

    removeBook(bookId: string) {
        this.store.dispatch(removeRecentBook({ bookId }));
    }
}
