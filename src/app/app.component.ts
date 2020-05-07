import { TimeoutComponent } from './timeout/timeout.component';
import { MatDialog } from '@angular/material';
import { MessageService } from './message.service';
import { Router } from '@angular/router';
import { UserService } from './user/user.service';
import { Component, OnInit, OnDestroy, HostListener, } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {MediaChange,MediaObserver} from '@angular/flex-layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,OnDestroy{
  isUserLogged : boolean;
  selectedTheme : string;
  items :any;
  starColor = "accent";
  showLoader;
  opened = false;
  showlogo = true;
  userFirstLetter;

  constructor(
    public _userService : UserService,
    private _messageService : MessageService,
    private _router:Router,
    private _timeoutPopup : MatDialog,
    public _mediaObserver : MediaObserver){ 
      this._mediaObserver.media$.subscribe();
      
      
  }

  ngOnInit(): void {
      
     //Check user logged in
      this.isUserLogged = this._userService.loggedIn();

      this._userService.setUserTimeOut(); 
      this._userService.userInactive.subscribe((n) => {
          let alertDialogRef  =  this._timeoutPopup.open(TimeoutComponent);
          clearTimeout(this._userService.userActivity);
      })

      let themeName = localStorage.getItem("themeName");

      if (themeName == undefined || themeName === null) {
          document.body.className = "default-theme";
          this.selectedTheme = "default-theme";
      }else{
          this.selectedTheme  = themeName + '-theme';
          document.body.className = themeName + '-theme';
          this._messageService.getMessage().subscribe(x => {
            this.selectedTheme = x.toString() + '-theme';
            document.body.className = x.toString() + '-theme';
          })
      }

      setTimeout(() =>{
        this.showlogo = false;
      },3000)
      
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
