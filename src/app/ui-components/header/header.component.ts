import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SearchInputComponent} from '@app/ui-components/search-input/search-input.component';
import {DropdownComponent} from '@app/ui-components/dropdown/dropdown.component';
import {IUserModel} from '@core/models/iuser.model';
import {Router} from '@angular/router';
import {AuthService} from '@core/api/auth/auth.service';

@Component({
    selector: 'app-header',
    imports: [
        SearchInputComponent,
        DropdownComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {


    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    profileConfig = {
        imgSrc:   'assets/avatar.png',
        title:    this.getUserName().displayName,
        options: [
            {
                label: 'Profile',
                value: 'profile',
                onSelect: () => {
                    this.router.navigate(['/profile']);
                }
            },
            {
                label: 'Favorites',
                value: 'favorites',
                onSelect: () => {
                    this.router.navigate(['/favorites']);
                }
            },
            {
                label: 'My Books',
                value: 'my-books',
                onSelect: () => {
                    this.router.navigate(['/books']);
                }
            },
            {
                label: 'Logout',
                value: 'logout',
                onSelect: () => {
                    this.authService.signOut();
                }
            },
        ]
    }

    langConfig = {
        imgSrc:   'assets/translate.png',
        title:    'Lang',
        options: [],
    }

    getUserName(): IUserModel {
        return JSON.parse(localStorage.getItem('user')!);
    }

}
