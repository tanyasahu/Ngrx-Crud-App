import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './users/user/user.component';
import { UsersModule } from '../app/users/users.module';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  { path: '', component: UserFormComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('../app/users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
