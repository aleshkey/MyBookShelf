import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";
import { environment } from '@env/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthorService {

    private BASE_URL = environment.elservier.baseURL;
    private apiKey = environment.elservier.apiKey;
    private retrieveUrl = 'https://api.elsevier.com/content/author';

    constructor(
        private http: HttpClient,
    ) {
    }

    getAuthorInfo(fullName: string): Observable<any> {
        const [given, ...rest] = fullName.trim().split(/\s+/);
        const surname = rest.join(' ');
        const queryStr = `authfirst(${given}) AND authlast(${surname})`;

        // 1) Поиск автора
        const paramsSearch = new HttpParams()
            .set('query', queryStr)
            .set('view', 'STANDARD')
            .set('count', '1');

        return this.http.get<{ 'search-results': { entry: any[] } }>(
            this.BASE_URL,
            {
                params: paramsSearch,
                headers: { 'X-ELS-APIKey': this.apiKey },
            }
        ).pipe(
            // Извлекаем AU-ID
            map(res => {
                const entry = res['search-results'].entry[0];
                const idField = entry['dc:identifier']; // "AUTHOR_ID:123456"
                return idField.split(':')[1];
            }),
            switchMap(auId => {
                const url = `${this.retrieveUrl}/${auId}`;
                const paramsRet = new HttpParams().set('view', 'METRICS');
                return this.http.get<{ 'author-retrieval-response': { author: any } }>(
                    url,
                    {
                        params: paramsRet,
                        headers: { 'X-ELS-APIKey': this.apiKey }
                    }
                ).pipe(
                    map(resp => resp['author-retrieval-response'].author)
                );
            })
        );
    }
}
