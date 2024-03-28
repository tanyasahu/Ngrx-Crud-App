import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { UserService } from '../user.service';
import * as userActions from '../state/user.action';
import { User } from '../users.model';

@Injectable()
export class UserEffect {
  constructor(private actions$: Actions, private UserService: UserService) {}

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadUsers>(userActions.UserActionTypes.LOAD_USERS),
    mergeMap((action: userActions.LoadUsers) =>
      this.UserService.getUsers().pipe(
        map((users: User[]) => new userActions.LoadUsersSuccess(users)),
        catchError((err) => of(new userActions.LoadUsersFail(err)))
      )
    )
  );

  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadUser>(userActions.UserActionTypes.LOAD_USER),
    mergeMap((action: userActions.LoadUser) =>
      this.UserService.getUserById(action.payload).pipe(
        map((user: User) => new userActions.LoadUserSuccess(user)),
        catchError((err) => of(new userActions.LoadUserFail(err)))
      )
    )
  );

  @Effect()
  createUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.CreateUser>(userActions.UserActionTypes.CREATE_USERS),
    map((action: userActions.CreateUser) => action.payload),
    mergeMap((user: User) =>
      this.UserService.createUser(user).pipe(
        map((newUser: User) => new userActions.CreateUserSuccess(newUser)),
        catchError((err) => of(new userActions.CreateUserFail(err)))
      )
    )
  );

  @Effect()
  UpdateUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.UpdateUser>(userActions.UserActionTypes.UPDATE_USERS),
    map((action: userActions.UpdateUser) => action.payload),
    mergeMap((user: User) =>
      this.UserService.updateUser(user).pipe(
        map(
          (updateUser: User) =>
            new userActions.UpdateUserSuccess({
              id: String(updateUser.id) ,
              changes: updateUser,
          })
        ),
        catchError((err) => of(new userActions.UpdateUserFail(err)))
      )
        )
  );
  @Effect()
  deleteUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.DeleteUser>(userActions.UserActionTypes.DELETE_USERS),
    map((action: userActions.DeleteUser) => action.payload),
    mergeMap((id: number) =>
      this.UserService.deleteUser(id).pipe(
        map(() => new userActions.DeleteUserSuccess(id)),
        catchError((err) => of(new userActions.DeleteUserFail(err)))
      )
    )
  );
}
