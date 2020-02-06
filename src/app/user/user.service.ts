import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
Observable    
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() {
  }
  getResults():any{
    const results = new Observable(observer =>{
       setTimeout(() => {
         observer.next(1)
       }, 1000);
       setTimeout(() => {
        observer.next(2)
      }, 2000);
      setTimeout(() => {
        observer.next(3)
      }, 3000);
      setTimeout(() => {
        observer.next(4)
      }, 4000);
      setTimeout(() => {
        observer.next(5)
      }, 5000);
    })
    return results;
  }
}
