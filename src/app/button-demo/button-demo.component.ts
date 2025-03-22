import { Component, Input } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ButtonModule } from 'primeng/button'; // Upewnij się, że PrimeNG ButtonModule jest zaimportowany

@Component({
  selector: 'button-demo',
  standalone: true,
  imports: [ButtonModule],  // Zaimportowanie ButtonModule
  template: `
    <div class="card flex justify-center">
      <p-button label="Check" (click)="logValue()"></p-button>
    </div>
  
  `
})
export class ButtonDemo {
  @Input() userInput: string = ''; // Odbieranie wartości z InputTxtComponent

  constructor(private loggerService: LoggerService) {}

  logValue(): void {
    this.loggerService.logMessage(this.userInput); // Logowanie wartości do konsoli
  }
}
