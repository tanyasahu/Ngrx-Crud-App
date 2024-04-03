import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as userActions from '../state/user.action';
import * as fromUser from '../state/user.reducer';
import { User } from '../users.model';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit {
  userForm: FormGroup;
  @Output() closed = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private store: Store<fromUser.AppState>
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      membership: ['', Validators.required],
    });
  }

  close() {
    this.closed.emit();
  }



  createUser() {
    const newUser: User = {
      name: this.userForm.get('name')?.value,
      phone: this.userForm.get('phone')?.value,
      address: this.userForm.get('address')?.value,
    };

    this.store.dispatch(new userActions.CreateUser(newUser));

    this.userForm.reset();
    this.close();
  }
}
