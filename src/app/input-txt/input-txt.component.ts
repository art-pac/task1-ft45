import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonDemo } from '../button-demo/button-demo.component'; // Zaimportowanie ButtonDemo

@Component({
  selector: 'app-input-txt',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, FormsModule, ButtonDemo], // Zaimportowanie ButtonDemo
  templateUrl: './input-txt.component.html',
  styleUrls: ['./input-txt.component.css']
})
export class InputTxtComponent {
  value3: string = ''; // Zmienna dla pola tekstowego
}
