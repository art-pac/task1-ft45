import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PlayersService } from '../../services/database.service';

@Component({
  selector: 'app-data-base',
  imports: [TableModule],
  templateUrl: './data-base.component.html',
  styleUrl: './data-base.component.css'
})
export class DataBaseComponent{
      players: any[] = [];
  
    constructor(private playersService: PlayersService) {}
  
    ngOnInit() {
      this.loadPlayers();
    }
  
    loadPlayers() {
      this.playersService.getPlayers().subscribe(data => this.players = data);
    }
  }
