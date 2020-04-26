import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
Observable    
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user : any[];
  isLoggedIn : boolean;
  userActivity;
  public userInactive = new Subject<number>();
  private islogged: BehaviorSubject<Boolean> = new BehaviorSubject(false);

  constructor(
    private _router : Router
  ) {
     this.isLoggedIn = localStorage.getItem('currentUser') ? true : false;
  }
  

  login(username:string,password:string):boolean{
    this.user =  JSON.parse(localStorage.getItem("users")) || [];
    const userExists = this.user.find( x => x.username == username && x.password == password);
    if(!!userExists){
      localStorage.setItem('currentUser', username);
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }
  
  /* Check if the user logged in or not */
  loggedIn():boolean{
      this.isLoggedIn = localStorage.getItem('currentUser') ? true : false;
      return this.isLoggedIn;
  }

  /* Logging out the user */
  logOut():void{
      if(localStorage.getItem('currentUser')){
          localStorage.removeItem('currentUser');
          this.isLoggedIn = false;
          this._router.navigate(['login'])
          
      }
  }

  /* get current user*/
  currentUser():boolean{
    if(localStorage.getItem('currentUser')){
      return JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  setUserTimeOut(){
      this.userActivity = setTimeout(() => {
          if (this.isLoggedIn) {
              this.userInactive.next(undefined);
          }
      },300000)
  }
}