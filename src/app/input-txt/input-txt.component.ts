import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-txt',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, FormsModule], // Dodano FloatLabelModule i FormsModule
  templateUrl: './input-txt.component.html',
  styleUrls: ['./input-txt.component.css']
})
export class InputTxtComponent {
  value3: string = ''; // Dodano zmienną dla [(ngModel)]
}