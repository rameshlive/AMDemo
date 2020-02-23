import { MessageService } from './message.service';
import { Observable } from 'rxjs';
import { Router, NavigationStart,Event, NavigationEnd } from '@angular/router';
import { UserService } from './user/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {MediaChange,MediaObserver} from '@angular/flex-layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,OnDestroy{
  loggedInUser : boolean = false;
  selectedTheme : string = "default-theme";
  constructor(
    private _userService : UserService,
    private _messageService : MessageService,
    private _router:Router,
    public _mediaObserver : MediaObserver){ 
      this._mediaObserver.media$.subscribe();
      this._messageService.getMessage().subscribe( x => this.selectedTheme = x.toString() + '-theme')
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
