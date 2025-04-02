import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DataBaseComponent } from './components/data-base/data-base.component';

const routes: Routes = [
  { path: 'user-form', component: UserFormComponent },
  { path: 'players-table', component: DataBaseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
