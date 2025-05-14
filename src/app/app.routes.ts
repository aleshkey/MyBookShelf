import {Routes} from '@angular/router';
import {RegisterPageComponent} from './pages/auth/register-page/register-page.component';
import {LoginPageComponent} from './pages/auth/login-page/login-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AuthGuard} from '@shared/guard/auth.guard';
import {DashboardComponent} from '@app/pages/home/dashboard/dashboard.component';
import {WithNavbarComponent} from '@app/components/with-navbar/with-navbar.component';
import {BookDetailsComponent} from '@app/components/book-details/book-details.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'register',
        component: RegisterPageComponent
    },
    {
        path: 'navbar',
        component: NavbarComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: WithNavbarComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'books/:id', component: BookDetailsComponent },
        ],
    },
    {
        path: '**',
        redirectTo: 'login'
    },
];
