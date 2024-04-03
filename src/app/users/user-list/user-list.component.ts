import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, toArray } from 'rxjs';
import * as fromUser from '../state/user.reducer';
import { User } from '../users.model';
import * as userActions from '../state/user.action';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  error$: Observable<String>;
  users: any;
  currentPage: number = 1;
  itemsPerPage: number = 5;
  @Output() openModal = new EventEmitter();
  constructor(private store: Store<fromUser.AppState>) {
    this.users$ = new Observable<User[]>();
    this.error$ = new Observable<''>();
  }

  ngOnInit(): void {
    this.store.dispatch(new userActions.LoadUsers());
    this.users$ = this.store.pipe(select(fromUser.getUsers));
 }



  deleteUser(user: User) {
    if (confirm('Are You Sure You want to Delete the User?')) {
      this.store.dispatch(new userActions.DeleteUser(user.id ? user.id : -1));
    }
  }

  editUser(user: User) {
    this.store.dispatch(new userActions.LoadUser(user.id ? user.id : -1));
    this.openModal.emit();
  }
}
