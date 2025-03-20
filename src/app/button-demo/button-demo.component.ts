import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'button-demo',
  templateUrl: './button-demo.component.html',
  standalone: true,
  imports: [ButtonModule]
})
export class ButtonDemo {
  @Input() userInput: string = ''; // Odbieranie wartości z InputTxtComponent

  constructor(private loggerService: LoggerService) {}

  logValue(): void {
    this.loggerService.logMessage(this.userInput);
  }
}
