import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {AuthService} from '@core/api/auth/auth.service';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-google-button',
    imports: [],
    templateUrl: './google-button.component.html',
    styleUrl: './google-button.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleButtonComponent {
    private destroyRef = inject(DestroyRef);

    constructor(
        private authService: AuthService
    ) {
    }

    signInWithGoogle(): void {
        this.authService.loginWithGoogle()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                console.log('success')
            });
    }
}
