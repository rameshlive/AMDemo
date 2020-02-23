import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
   public message = new Subject<String>();
  constructor() {
    
  }

  updateMessage(value : string){
    this.message.next(value);
  }

  getMessage():Observable<String>{
    
    return this.message.asObservable();
  }
}
