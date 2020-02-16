import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
Observable    
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user : any[];
  private islogged: BehaviorSubject<Boolean> = new BehaviorSubject(false);

  constructor() {
    this.user = [
      {username : "ramesh", password : "ramesh"},
      {username : "angular", password : "angular"}
    ]
  }
  login(username:string,password:string):boolean{
    const userExists = this.user.find( x => x.username == username && x.password == password);
    if(!!userExists){
      localStorage.setItem('user', username);
      return true
    }
    return false;
  }

  isUserExists():boolean{
    if(localStorage.getItem('user')){
      return true;
    }
    return false;
  }
}