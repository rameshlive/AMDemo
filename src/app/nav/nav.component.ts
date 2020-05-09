import { RoutereventsService } from './../services/shared/routerevents.service';
import { TestService } from './../test.service';
import { UserService } from './../user/user.service';
import { CartService } from './../cart.service';
import { BottomsheetComponent } from './../bottomsheet/bottomsheet.component';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, EventEmitter, Output, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import  { Location} from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  wishlistCount : number;
  sideNavOpened = false;
  @Output() menuToggle = new EventEmitter();
  backURL;
  pagename;

  count:string;
  constructor(
    private _router:Router,
    private _cartService :CartService,
    public _userService : UserService,
    private _bottomSheet : MatBottomSheet,
    private _location : Location,
    private cd: ChangeDetectorRef,
    private _testService : TestService) {
      this._cartService.getTotalWishlistCount().subscribe(x => this.wishlistCount = x )
     }

  ngOnInit() {
      this._cartService.getTotalWishlistCount().subscribe( x => this.wishlistCount = x )
      this.wishlistCount = this.wishlistCount == undefined ? 0 : this.wishlistCount;

      this._testService.pagename.subscribe( x => {
        this.pagename = x; 
      })
  }


  logout(){
      this._userService.logOut();
      this._router.navigate(['login']);
  }

  goBack(){
      this._location.back();
  }

  openCart(){
      this._router.navigate(['cart'])
  }
  /*Open Theme Switcher*/
  openThemeSwitcher(){
      this._bottomSheet.open(BottomsheetComponent);
  }

  /*open Wishlists*/
  openWishlist(){
      //this.titleService.setTitle('Wishlists')
      this._router.navigate(['/wishlists']);
  }

  menuToggleFn(){
      this.menuToggle.emit()
  }

  ngAfterViewInit() {
     /*  setTimeout(() => {
        this._testService.pagename.subscribe( x => {
          this.pagename = x;
        })
        console.log('ng Aftre view init current title::' + this.titleService.getTitle());
      }); */
  }
}
