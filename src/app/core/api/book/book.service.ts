import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBookModel} from '@core/models/ibook.model';
import {environment} from "@env/environment.development";

type SearchParams = {
    type: keyof BookService['queryParams'];
    value: string;
};

@Injectable({
    providedIn: 'root'
})
export class BookService {

    private readonly baseUrl = environment.baseUrl;
    private readonly queryParams = {
        title: 'intitle',
        author: 'inauthor',
        subjects: 'subject',
        text: 'q',
        isbn: 'isbn',
    } as const;

    constructor(
        private http: HttpClient
    ) {
    }

    public search(params: SearchParams): Observable<IBookModel[]> {
        return this.http.get<IBookModel[]>(this.buildSearchUrl(params));
    }

    private buildSearchUrl(params: SearchParams): string {
        const field = this.queryParams[params.type];
        const encodedValue = encodeURIComponent(params.value).replace(/%20/g, '+');

        const qParam = field === 'q'
            ? encodedValue
            : `${field}:${encodedValue}`;
        return `${this.baseUrl}?q=${qParam}`;
    }

    public getBookInfo(id: string): Observable<IBookModel> {
        return this.http.get<IBookModel>(`${this.baseUrl}/${id}`);
    }

    public getRecommended(): Observable<any> { //todo change any type
        const params = new HttpParams()
            .set('q', 'programming')
            .set('maxResults', '10');

        return this.http.get<IBookModel[]>(this.baseUrl, { params });    }

}
