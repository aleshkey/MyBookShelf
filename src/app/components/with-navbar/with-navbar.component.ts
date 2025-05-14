import {Component} from '@angular/core';
import {NavbarComponent} from '@app/components/navbar/navbar.component';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '@app/components/header/header.component';

@Component({
    selector: 'app-with-navbar',
    imports: [
        NavbarComponent,
        RouterOutlet,
        HeaderComponent
    ],
    templateUrl: './with-navbar.component.html',
    styleUrl: './with-navbar.component.css'
})
export class WithNavbarComponent {

}
