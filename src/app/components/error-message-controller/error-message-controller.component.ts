import {Component, input, Input} from '@angular/core';


@Component({
  selector: 'app-error-message-controller',
    imports: [],
  templateUrl: './error-message-controller.component.html',
  styleUrl: './error-message-controller.component.css'
})
export class ErrorMessageControllerComponent {
    message = input<string>('');

    show = input<boolean>(false);
}
