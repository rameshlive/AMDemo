import { MessageService } from './message.service';
import { Observable } from 'rxjs';
import { Router, NavigationStart,Event, NavigationEnd } from '@angular/router';
import { UserService } from './user/user.service';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
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
  constructor(
    private _userService : UserService,
    private _messageService : MessageService,
    private _router:Router,
    public _mediaObserver : MediaObserver){ 
      this._mediaObserver.media$.subscribe();
  }
  ngOnInit(): void {
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
  }
}
