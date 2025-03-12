import { Component } from '@angular/core';
import { ButtonDemo } from './button-demo/button-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ButtonDemo]
})
export class AppComponent {
  title = 'angular-app';
}
