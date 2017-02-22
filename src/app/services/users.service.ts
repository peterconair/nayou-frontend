import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { User } from './../models/user'

@Injectable()
export class UsersService {

  users: User[];
  // private url: string = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: Http) { }

  getUsers() {
    let url = "http://localhost:8080/rest/user/users";
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUserByUserId(id: string) {
    let tokenUrl = "http://localhost:8080/rest/user/id";
    console.log("Service get UserId :Id : " + id);
    console.log("URL : " + tokenUrl);
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
    return this.http.post(tokenUrl, id, { headers: headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUserByName(username: string) {
    console.log("Service get UserName : " + username);
    let tokenUrl = "http://localhost:8080/rest/user/userName";
    console.log("URL : " + tokenUrl);
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
    return this.http.post(tokenUrl, username, { headers: headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateUser(user: User) {
    console.log("User Service -> updateUser() ");
    let tokenUrl = "http://localhost:8080/rest/user/update";
    console.log("URL : " + tokenUrl);
    let headers1 = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
    return this.http.post(tokenUrl, JSON.stringify(user), { headers: headers1 })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addUser(user: User) {
    console.log("User Service -> addUser() ");
    let tokenUrl = "http://localhost:8080/user/register";
    console.log("URL : " + tokenUrl);
    let headers1 = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(tokenUrl, JSON.stringify(user), { headers: headers1 })
     .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteUser(user: User) {
    let tokenUrl = "http://localhost:8080/rest/user/delete";
     console.log("User Service -> deleteUser() ");
     console.log("URL : " + tokenUrl);
    let headers1 = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
    return this.http.post(tokenUrl, JSON.stringify(user), { headers: headers1 })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  private getUserUrl(id) {
    return "/" + id;
  }

}
