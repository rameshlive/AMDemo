import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  public pagename = new Subject<string>();
  public pagename$ = this.pagename.asObservable();

  constructor() {
  }

  emit(value : string){
    this.pagename.next(value)
  }

}
