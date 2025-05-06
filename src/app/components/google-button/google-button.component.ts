import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-google-button',
  imports: [],
  templateUrl: './google-button.component.html',
  styleUrl: './google-button.component.css'
})
export class GoogleButtonComponent {
    constructor(private authService: AuthService) {
    }

    signInWithGoogle() {
        this.authService.loginWithGoogle()
            .subscribe( () => {console.log("success")});
    }
}
