import { Component } from '@angular/core';
import { ButtonDemo } from './button-demo/button-demo.component';
import { InputTxtComponent } from "./input-txt/input-txt.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ButtonDemo, InputTxtComponent]
})
export class AppComponent {
  title = 'angular-app';
}
