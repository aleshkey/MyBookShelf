import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {IQuote} from "@core/models/iquote.model";

@Injectable({
    providedIn: 'root'
})
export class QuoteService {

    quotes: IQuote[] = [
        {text: 'There is more treasure in books than in all the pirate’s loot on Treasure Island.', author: 'Walt Disney'},
        {text: 'The only thing you absolutely have to know is the location of the library.', author: 'Albert Einstein'},
        {text: 'A reader lives a thousand lives before he dies.', author: 'George R.R. Martin'},
        {text: 'Books are a uniquely portable magic.', author: 'Stephen King'}
    ];

    getRandomQuotes(): Observable<IQuote[]> {
        return of(this.quotes);
    }
}
