import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { User } from '../users.model';

export enum UserActionTypes {
  LOAD_USERS = '[User] Load Users',
  LOAD_USERS_SUCCESS = '[User] Load Users Success',
  LOAD_USERS_FAIL = '[User] Load Users Fail',
  LOAD_USER = '[User] Load User',
  LOAD_USER_SUCCESS = '[User] Load User Success',
  LOAD_USER_FAIL = '[User] Load User Fail',
  CREATE_USERS = '[User] Create Users',
  CREATE_USERS_SUCCESS = '[User] Create Users Success',
  CREATE_USERS_FAIL = '[User] Create Users Fail',
  DELETE_USERS = '[User] Delete Users',
  DELETE_USERS_SUCCESS = '[User] Delete Users Success',
  DELETE_USERS_FAIL = '[User] Delete Users Fail',
  UPDATE_USERS = '[User] Update Users',
  UPDATE_USERS_SUCCESS = '[User] Update Users Success',
  UPDATE_USERS_FAIL = '[User] Update Users Fail',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USERS_SUCCESS;

  constructor(public payload: User[]) {}
}

export class LoadUsersFail implements Action {
  readonly type = UserActionTypes.LOAD_USERS_FAIL;

  constructor(public payload: string) {}
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LOAD_USER;
  constructor(public payload: number) {}
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class LoadUserFail implements Action {
  readonly type = UserActionTypes.LOAD_USER_FAIL;

  constructor(public payload: string) {}
}

export class CreateUser implements Action {
  readonly type = UserActionTypes.CREATE_USERS;
  constructor(public payload: User) {}
}

export class CreateUserSuccess implements Action {
  readonly type = UserActionTypes.CREATE_USERS_SUCCESS;

  constructor(public payload: User) {}
}

export class CreateUserFail implements Action {
  readonly type = UserActionTypes.CREATE_USERS_FAIL;

  constructor(public payload: string) {}
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UPDATE_USERS;
  constructor(public payload: User) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UserActionTypes.UPDATE_USERS_SUCCESS;

  constructor(public payload: Update<User>) {}
}

export class UpdateUserFail implements Action {
  readonly type = UserActionTypes.UPDATE_USERS_FAIL;

  constructor(public payload: string) {}
}

export class DeleteUser implements Action {
  readonly type = UserActionTypes.DELETE_USERS;
  constructor(public payload: number) {}
}

export class DeleteUserSuccess implements Action {
  readonly type = UserActionTypes.DELETE_USERS_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteUserFail implements Action {
  readonly type = UserActionTypes.DELETE_USERS_FAIL;

  constructor(public payload: string) {}
}
