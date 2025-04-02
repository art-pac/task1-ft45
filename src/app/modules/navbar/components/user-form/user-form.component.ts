import { Component } from '@angular/core';
import { PlayersService } from '../../services/database.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  player = { number: 0, name: '' };

  constructor(private playersService: PlayersService) {}

  onSubmit() {
    this.playersService.addPlayer(this.player).subscribe(() => {
      this.player = { number: 0, name: '' };
    });
  }
}
