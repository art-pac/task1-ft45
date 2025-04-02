import { Component } from '@angular/core';
import { UserFormComponent } from '../../modules/navbar/components/user-form/user-form.component';
import { DataBaseComponent } from '../../modules/navbar/components/data-base/data-base.component';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [MenubarModule],
})
export class NavbarComponent {
  items = [
    {
      label: 'Add Player',
      icon: 'pi pi-user-plus',
      routerLink: [UserFormComponent]
    },
    {
      label: 'Players Table',
      icon: 'pi pi-list',
      routerLink: [DataBaseComponent]
    }
  ];
}
