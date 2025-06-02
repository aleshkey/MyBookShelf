import {Routes} from '@angular/router';
import {RegisterPageComponent} from './pages/auth/register-page/register-page.component';
import {LoginPageComponent} from './pages/auth/login-page/login-page.component';
import { NavbarComponent } from '@app/ui-components/navbar/navbar.component';
import {AuthGuard} from '@core/guards/auth.guard';
import {DashboardComponent} from '@app/pages/home/dashboard/dashboard.component';
import {WithNavbarComponent} from '@app/components/with-navbar/with-navbar.component';
import {BookDetailsComponent} from '@app/pages/home/book-details-page/components/book-details/book-details.component';
import {SearchPageComponent} from "@app/pages/home/search-page/search-page.component";
import {FavoritePageComponent} from "@app/pages/home/favorite-page/favorite-page.component";
import {WebreaderComponent} from "@app/pages/home/webreader/webreader.component";

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
            { path: 'search', component: SearchPageComponent },
            { path: 'favorites', component: FavoritePageComponent },
            { path: 'books/:id/webreader', component: WebreaderComponent },
        ],
    },
    {
        path: '**',
        redirectTo: 'login'
    },
];
