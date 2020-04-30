import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(
    private _titleService : Title,
    private _router : Router
  ) {
     
   }

   getTitle(){
    this._router.events.subscribe(
      (event) => {
             if (event instanceof NavigationEnd) {
                  return this._titleService.getTitle();
             }
    });
     
   }

   setTitle(value : string){
     this._titleService.setTitle(value)
   }
}
