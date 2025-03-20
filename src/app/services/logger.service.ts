import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logMessage(message: string): void {
    console.log('User Input:', message);
  }
}
