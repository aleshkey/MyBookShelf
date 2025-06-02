import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-login-page',
    imports: [
        LoginFormComponent
    ],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
    constructor(stzr: DomSanitizer) {
    }
}
