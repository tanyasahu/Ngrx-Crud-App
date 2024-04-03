import * as userActions from './user.action';
import { User } from '../users.model';
import * as fromRoot from '../../state/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface userState extends EntityState<User> {
  selectedUserId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  users: userState;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const defaultUser: userState = {
  ids: [],
  entities: {},
  selectedUserId: null,
  loading: false,
  loaded: false,
  error: '',
};

export const initialState = userAdapter.getInitialState(defaultUser);

export function userReducer(state: any = initialState, action: any): userState {
  switch (action.type) {
    case userActions.UserActionTypes.LOAD_USERS_SUCCESS: {
      return userAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true,
      });
    }

    case userActions.UserActionTypes.LOAD_USERS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload,
      };
    }

    case userActions.UserActionTypes.LOAD_USER_SUCCESS: {
      return userAdapter.addOne(action.payload, {
        ...state,
        selectedUserId: action.payload.id,
      });
    }

    case userActions.UserActionTypes.LOAD_USER_FAIL: {
      return {
        ...state,

        error: action.payload,
      };
    }

    case userActions.UserActionTypes.CREATE_USERS_SUCCESS: {
      return userAdapter.addOne(action.payload, state);
    }
    case userActions.UserActionTypes.CREATE_USERS_FAIL: {
      return {
        ...state,

        error: action.payload,
      };
    }

    case userActions.UserActionTypes.UPDATE_USERS_SUCCESS: {
      return userAdapter.updateOne(action.payload, state);
    }

    case userActions.UserActionTypes.UPDATE_USERS_FAIL: {
      return {
        ...state,

        error: action.payload,
      };
    }

    case userActions.UserActionTypes.DELETE_USERS_SUCCESS: {
      return userAdapter.removeOne(action.payload, state);
    }

    case userActions.UserActionTypes.DELETE_USERS_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

const getUserFeatureState = createFeatureSelector<userState>('users');

export const getUsers = createSelector(
  getUserFeatureState,
  userAdapter.getSelectors().selectAll
);

export const getError = createSelector(
  getUserFeatureState,
  (state: userState) => state.error
);

export const getUsersLoading = createSelector(
  getUserFeatureState,
  (state: userState) => state.loading
);

export const getUsersLoaded = createSelector(
  getUserFeatureState,
  (state: userState) => state.loaded
);

export const getCurrentUserId = createSelector(
  getUserFeatureState,
  (state: userState) => state.selectedUserId
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  getCurrentUserId,
  (state) => {
    return state.entities[state.selectedUserId ? state.selectedUserId : -1];
  }
);
