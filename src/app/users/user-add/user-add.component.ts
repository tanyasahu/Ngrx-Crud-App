import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as userActions from "../state/user.action";
import * as fromUser from "../state/user.reducer";
import { User } from "../users.model";
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromUser.AppState>
  ) {
    this.userForm = this.fb.group({ // Initialize userForm using FormBuilder
      name: ['', Validators.required], // Define form controls with initial value and validators
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      address: ["", Validators.required],
      membership: ["", Validators.required]
    });
  }

  createUser() {
    const newUser: User = {
      name: this.userForm.get("name")?.value,
      phone: this.userForm.get("phone")?.value,
      address: this.userForm.get("address")?.value,
    };

    this.store.dispatch(new userActions.CreateUser(newUser));

    this.userForm.reset();
  }
}
