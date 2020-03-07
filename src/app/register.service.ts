import { User } from './user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  API_URL = 'https://my-json-server.typicode.com/rameshlive/AMDemo';
  constructor(private _http : HttpClient) { }

  addUser(newuser):Observable<User>{
      return this._http.post<User>(`${this.API_URL}/users`,newuser)
  }
}
