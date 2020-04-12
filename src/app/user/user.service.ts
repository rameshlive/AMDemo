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
    
  }
  login(username:string,password:string):boolean{
    this.user =  JSON.parse(localStorage.getItem("users")) || [];
    const userExists = this.user.find( x => x.username == username + '@amdemo.com' && x.password == password);
    if(!!userExists){
      localStorage.setItem('currentUser', username);
      return true;
    }
    return false;
  }
  
  /* Check if User Logged in or Not using LocaL Storage*/
  isUserExists():boolean{
    if(localStorage.getItem('currentUser')){
      return true;
    }
    return false;
  }
}