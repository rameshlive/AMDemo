import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
   public message = new Subject<String>();
 
   constructor() {
      //this.updateMessage(localStorage.getItem("themeName"));
     // console.log(this.getMessage().subscribe( x => console.log(x)))
  }

  updateMessage(value : string){
    localStorage.setItem("themeName",value)
    this.message.next(value);
  }

  getMessage():Observable<String>{
    return this.message.asObservable();
  }
}
