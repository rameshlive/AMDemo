import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
MatBottomSheetRef
@Component({
  selector: 'app-cartbottomsheet',
  templateUrl: './cartbottomsheet.component.html',
  styleUrls: ['./cartbottomsheet.component.scss']
})
export class CartbottomsheetComponent implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _bottomsheetRef : MatBottomSheetRef<CartbottomsheetComponent>,
    private _router : Router
  ) { }

  ngOnInit() {
  }

  continueShopping(){
    this._bottomsheetRef.dismiss();
  }

  openCart(){
    console.log("sdsad")
      this._bottomsheetRef.dismiss();
      this._router.navigate(['cart'])
  }

}
