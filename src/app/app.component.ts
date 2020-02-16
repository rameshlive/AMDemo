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
  showPage: boolean = false;
  loggedInUser : boolean = false;
  constructor(
    private _spinner: NgxSpinnerService,
    private _userService : UserService,
    private _router:Router){ 
    /* Show Loading when Navigation change*/
     this._router.events.subscribe((routerEvent : Event) => {
       if(routerEvent instanceof NavigationStart){
          this._spinner.show()
       }
       if(routerEvent instanceof NavigationEnd){
         setTimeout(() => {
           this._spinner.hide()
         }, 2000);
           
        }
    }) 
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}
