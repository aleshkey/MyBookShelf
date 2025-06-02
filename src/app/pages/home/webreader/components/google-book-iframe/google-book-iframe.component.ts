import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { IBookModel } from '@core/models/ibook.model';

@Component({
    selector: 'app-google-book-iframe',
    templateUrl: './google-book-iframe.component.html',
    styleUrls: ['./google-book-iframe.component.css']
})
export class GoogleBookIframeComponent implements OnInit, AfterViewInit {
    @Input() book!: IBookModel | null;
    @ViewChild('viewerContainer', { static: true }) viewerRef!: ElementRef<HTMLDivElement>;

    ngOnInit(): void {
        this.loadBooksApi().then(() => {
            (window as any).google.books.load();
            (window as any).google.books.setOnLoadCallback(() => {
                const viewer = new (window as any).google.books.DefaultViewer(this.viewerRef.nativeElement);
                viewer.load(this.book!.id);
            });
        }).catch(err => console.error('Books API load error', err));
    }

    ngAfterViewInit(): void {
        console.log(1)// Ensures DOM is fully ready before we try inserting viewer
    }

    private loadBooksApi(): Promise<void> {
        return new Promise((resolve, reject) => {
            const win = window as any;
            if (win.google?.books?.DefaultViewer) {
                return resolve();
            }
            const script = document.createElement('script');
            script.src = 'https://www.google.com/books/jsapi.js';
            script.onload = () => resolve();
            script.onerror = (err) => reject(err);
            document.head.appendChild(script);
        });
    }
}
