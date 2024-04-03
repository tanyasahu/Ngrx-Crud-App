import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../users.model';
import { Store } from '@ngrx/store';
import * as userActions from '../state/user.action';
import * as fromUser from '../state/user.reducer';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  userForm: FormGroup;
  customer$: Observable<User | undefined>;
  @Output() closed = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private store: Store<fromUser.AppState>
  ) {
    this.customer$ = new Observable<User>();
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      id: null,
    });
  }

  ngOnInit() {
    const customer$: Observable<User | undefined> = this.store.select(
      fromUser.getCurrentUser
    );

    customer$.subscribe((currentCustomer) => {
      if (currentCustomer) {
        this.userForm.patchValue({
          name: currentCustomer.name,
          phone: currentCustomer.phone,
          address: currentCustomer.address,
          id: currentCustomer.id,
        });
      }
    });
  }

  updateUser() {
    const updatedUser: User = {
      name: this.userForm.get('name')?.value,
      phone: this.userForm.get('phone')?.value,
      address: this.userForm.get('address')?.value,
      id: this.userForm.get('id')?.value,
    };

    this.store.dispatch(new userActions.UpdateUser(updatedUser));
    this.close();
  }
  
  close() {
    this.closed.emit();
  }

}
