import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from "@angular/router";
import {StoreModule} from '@ngrx/store'
import {EffectsModule } from '@ngrx/effects'
import {userReducer} from './state/user.reducer'
import {UserEffect} from './state/user.effects'
import { ReactiveFormsModule } from '@angular/forms';
const userRoutes=[{path:'' ,component: UserComponent}]

@NgModule({
  declarations: [
    UserComponent,
    UserAddComponent,
    UserEditComponent,
    UserListComponent
  ],
  imports: [
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users',userReducer),
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([UserEffect])
  ]
})
export class UsersModule { }
