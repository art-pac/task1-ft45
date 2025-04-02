import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private apiUrl = 'http://localhost:3000/players';

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPlayer(player: { number: number; name: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, player);
  }
}
