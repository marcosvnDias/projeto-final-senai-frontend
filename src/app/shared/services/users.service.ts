import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Class } from '../interfaces/classes.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'http://localhost:3000/';
  userSelected!: User;
  
  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<User[]>(this.baseUrl + "users");
  }

  getAllClasses() {
    return this.httpClient.get<Class[]>(this.baseUrl + "classes");
  }
  
  getUserSelected() {
    return this.userSelected;
  }

  postUserSelected(user:User) {
    this.userSelected = user;
  }

  removerUserSelected() {
    let userEmpty!:User;
    this.userSelected = userEmpty;
  }
}
