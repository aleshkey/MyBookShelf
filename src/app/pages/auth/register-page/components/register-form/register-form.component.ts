import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {
    ErrorMessageControllerComponent
} from '@app/components/error-message-controller/error-message-controller.component';
import {passwordMatchValidator} from '@app/utils/validators/password-match-validator';
import {AuthService} from '@app/service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register-form',
    imports: [
        ReactiveFormsModule,
        ErrorMessageControllerComponent
    ],
    templateUrl: './register-form.component.html',
    styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit {

    registerForm!: FormGroup;

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.registerForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(3)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8)]),
            confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
        }, {validators: passwordMatchValidator('password', 'confirmPassword')});
    }

    onSubmit() {
        if (this.registerForm.invalid) {
            return;
        }

        const {email, name: username, password} = this.registerForm.value;

        this.authService.register(email, username, password)
            .then(() => {
                this.router.navigateByUrl('/login');
            });
    }

    signInWithGoogle() {
        this.authService.loginWithGoogle()
            .subscribe(() => {
                this.router.navigateByUrl('/navbar');
            });
    }
}
