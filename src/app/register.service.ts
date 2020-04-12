import { User } from './user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  API_URL = 'https://my-json-server.typicode.com/rameshlive/AMDemo';
  constructor(private _http : HttpClient) {
      this._http.get<User>(`${this.API_URL}/users`).subscribe(x => console.log(x))

   }

  addUser(newuser:User){
     // return this._http.post<User>(`${this.API_URL}/users`,newuser)
      let users = [];
      users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(newuser);
      localStorage.setItem('users',JSON.stringify(users));
  }
}
