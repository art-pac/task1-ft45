import { Component } from '@angular/core';
import { TextInputService } from '../text-input.service';  // Importujemy serwis
import { ButtonModule } from 'primeng/button';  // Import modułu przycisku
import { InputTextModule } from 'primeng/inputtext';  // Import modułu pola tekstowego
import { CommonModule } from '@angular/common';  // Import CommonModule dla dyrektyw jak ngIf, ngFor

@Component({
  selector: 'app-text-input-with-button',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule],  // Importujemy moduły PrimeNG
  templateUrl: './text-input-with-button.component.html',
  styleUrls: ['./text-input-with-button.component.css']
})
export class TextInputWithButtonComponent {
  inputText: string = '';

  constructor(private textInputService: TextInputService) {}

  onSubmit() {
    this.textInputService.logText(this.inputText);  // Logujemy tekst w konsoli
  }
}
