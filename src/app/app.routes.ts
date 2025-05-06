import {Routes} from '@angular/router';
import {RegisterPageComponent} from "./pages/auth/register-page/register-page.component";
import {LoginPageComponent} from "./pages/auth/login-page/login-page.component";

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'register',
        component: RegisterPageComponent
    }
];
