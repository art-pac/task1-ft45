import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent]
})
export class AppComponent {
  title = 'angular-app';
}
