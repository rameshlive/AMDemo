import { BottomsheetComponent } from './../bottomsheet/bottomsheet.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private _router:Router,
    private _bottomSheet : MatBottomSheet) { }

  ngOnInit() {
  }

  /* Logging out user */
  logoutUser():void{
    if(localStorage.getItem('user')){
      localStorage.removeItem('user');
      this._router.navigate(['login']);
    }
  }

  /*Open Theme Switcher*/
  openThemeSwitcher(){
      this._bottomSheet.open(BottomsheetComponent)
  }
}
