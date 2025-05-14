import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '@app/service/auth/auth.service';
import {Router} from '@angular/router';
import {ErrorMessageControllerComponent} from '@app/components/error-message-controller/error-message-controller.component';

@Component({
    selector: 'app-login-form',
    imports: [
        ErrorMessageControllerComponent,
        ReactiveFormsModule
    ],
    templateUrl: './login-form.component.html',
    styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
    registerForm!: FormGroup;

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
                console.log('1');
                this.router.navigateByUrl('/dashboard')
                    .then(success => console.log('Navigation success:', success))
                    .catch(err => console.error('Navigation error:', err));
                console.log('Login Successful.');
            });

    }

    signInWithGoogle() {
        this.authService.loginWithGoogle()
            .subscribe(() => {
                this.router.navigateByUrl('/navbar');
                console.log('success');
            });
    }
}
