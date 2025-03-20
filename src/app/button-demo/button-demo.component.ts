import { Component, Input } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ButtonModule } from 'primeng/button'; // Upewnij się, że PrimeNG ButtonModule jest zaimportowany

@Component({
  selector: 'button-demo',
  templateUrl: './button-demo.component.html',
  standalone: true,
  imports: [ButtonModule]  // Zaimportowanie ButtonModule
})
export class ButtonDemo {
  @Input() userInput: string = ''; // Odbieranie wartości z InputTxtComponent

  constructor(private loggerService: LoggerService) {}

  logValue(): void {
    this.loggerService.logMessage(this.userInput); // Logowanie wartości do konsoli
  }
}
