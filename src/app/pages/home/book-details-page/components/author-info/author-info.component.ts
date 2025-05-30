import {ChangeDetectionStrategy, Component, DestroyRef, inject, input, OnInit} from '@angular/core';
import {AuthorService} from "@core/api/author/author.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {catchError, of, tap} from "rxjs";

@Component({
  selector: 'app-author-info',
  imports: [],
  templateUrl: './author-info.component.html',
  styleUrl: './author-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorInfoComponent implements OnInit {
    private destroyRef = inject(DestroyRef);
    author = input<string>('');

    constructor(
        private authorService: AuthorService,
    ) {}

    ngOnInit(): void {
        console.log('author: ', this.author());
        this.authorService.getAuthorInfo(this.author())
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                tap((data: any) => console.log(data)),
                catchError((error: Error) => {
                    console.log(error);
                    return of(null); // или другой fallback
                })
            )
            .subscribe();
    }


}
