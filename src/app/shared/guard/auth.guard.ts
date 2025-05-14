import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {AuthService} from '@app/service/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }

    canActivate(): boolean | UrlTree {
        console.log(this.authService.isLoggedIn);
        if (this.authService.isLoggedIn) {
            return true;
        }
        return this.router.createUrlTree(['/login']);
    }
}
