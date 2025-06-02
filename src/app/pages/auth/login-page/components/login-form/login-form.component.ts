import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '@core/api/auth/auth.service';
import {Router} from '@angular/router';
import {ErrorMessageControllerComponent} from '@app/ui-components/error-message-controller/error-message-controller.component';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-login-form',
    imports: [
        ErrorMessageControllerComponent,
        ReactiveFormsModule
    ],
    templateUrl: './login-form.component.html',
    styleUrl: './login-form.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
    registerForm!: FormGroup;
    private destroyRef = inject(DestroyRef);

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.registerForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        });
    }

    onSubmit() {
        if (this.registerForm.invalid) {
            return;
        }

        const {email, password} = this.registerForm.value;
        this.authService.login(email, password)
            .then(() => {
                this.router.navigateByUrl('/dashboard')
                    .then(success => console.log('Navigation success:', success))
                    .catch(err => console.error('Navigation error:', err));
            });

    }

    signInWithGoogle() {
        this.authService.loginWithGoogle()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.router.navigateByUrl('/navbar');
                console.log('success');
            });
    }
}
