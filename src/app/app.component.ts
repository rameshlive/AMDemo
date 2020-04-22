import { TimeoutComponent } from './timeout/timeout.component';
import { MatDialog } from '@angular/material';
import { MessageService } from './message.service';
import { Observable, Subject } from 'rxjs';
import { Router, NavigationStart,Event, NavigationEnd } from '@angular/router';
import { UserService } from './user/user.service';
import { Component, OnInit, OnDestroy, ViewEncapsulation, HostListener } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {MediaChange,MediaObserver} from '@angular/flex-layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,OnDestroy{
  loggedInUser : boolean = false;
  selectedTheme : string;
  items :any;
  starColor = "accent";
  
  constructor(
    private _userService : UserService,
    private _messageService : MessageService,
    private _router:Router,
    private _timeoutPopup : MatDialog,
    public _mediaObserver : MediaObserver){ 
      this._mediaObserver.media$.subscribe();
  }
  ngOnInit(): void {
      this._userService.setUserTimeOut(); 
      this._userService.userInactive.subscribe((n) => {
        let alertDialogRef  =  this._timeoutPopup.open(TimeoutComponent);
        clearTimeout(this._userService.userActivity);
      })
      if (localStorage.getItem("themeName") == undefined || localStorage.getItem("themeName") === null) {
          document.body.className = "default-theme";
          this.selectedTheme = "default-theme";
      }else{
          this.selectedTheme  = localStorage.getItem("themeName") + '-theme';
          document.body.className = localStorage.getItem("themeName") + '-theme';
          this._messageService.getMessage().subscribe(x => {
            this.selectedTheme = x.toString() + '-theme';
            document.body.className = x.toString() + '-theme';
          })
      }

      
  }
  
  ngOnDestroy(): void {

    //this._userService.userInactive.unsubscribe();
  }
 

  @HostListener('window:mousemove',['$event'])

  handleMousemove(event: MouseEvent){
    clearTimeout(this._userService.userActivity);
    this._userService.setUserTimeOut();
  }

}
