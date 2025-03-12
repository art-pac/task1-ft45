import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextInputService {
  logText(text: string) {
    console.log(text);  // Logowanie tekstu do konsoli
  }
}
