import { Router, Event, NavigationEnd, NavigationStart } from '@angular/router';
import { Injectable } from '@angular/core';
import { filter, delay } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutereventsService {
  private previousUrl : string;
  private currentUrl : string;
  constructor(
    private _router: Router
  ) {
      console.log("current URL" + this._router.url)
      this.currentUrl = this._router.url;
      this._router.events.pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event : NavigationEnd) =>{
                this.previousUrl =  this.currentUrl
                this.currentUrl = event.url
              }
      )
   }

   getPreviousUrl(){
     return this.previousUrl;
   }
}
