import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalusersstorageService {
  usernames:string[] = [];
  constructor() { }

  getUsers():String[]{
   //Get the users from localstorage
   let users =  JSON.parse(localStorage.getItem('users'));
   //Ierate through each users and get the first poprtioon of username  from email field using split method
   if( users != null ){
       this.usernames = users.map(user => user.username.split('@')[0])
   }
   
   return this.usernames;
  }
}
