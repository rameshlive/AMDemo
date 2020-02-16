import { Router, NavigationStart,Event, NavigationEnd } from '@angular/router';
import { UserService } from './user/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,OnDestroy{
  loggedInUser : boolean = false;
  constructor(
    private _userService : UserService,
    private _router:Router){ 
      //this._spinner.hide();
    /* Show Loading when Navigation change*/
   /*   this._router.events.subscribe((routerEvent : Event) => {
       if(routerEvent instanceof NavigationEnd){
            setTimeout(() => {
              this._spinner.hide()
            }, 2000); 
        }
    })  */
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}
