import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { User } from "./users.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private usersUrl = "http://localhost:3000/users";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserById(payload: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${payload}`);
  }

  createUser(payload: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, payload);
  }

  updateUser(user: User): Observable<User> {

    return this.http.patch<User>(
      `${this.usersUrl}/${user.id}`,
      user
    );
  }

  deleteUser(payload: number) {
    return this.http.delete(`${this.usersUrl}/${payload}`);
  }
}
