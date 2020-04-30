import { Component, OnInit, Inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bottomsheet-wishlist',
  templateUrl: './bottomsheet-wishlist.component.html',
  styleUrls: ['./bottomsheet-wishlist.component.scss']
})
export class BottomsheetWishlistComponent implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _bottomSheetRef: MatBottomSheetRef<BottomsheetWishlistComponent>,
    private _router : Router) { }

  ngOnInit() {
  }

  OpenWishlist(){
      this._bottomSheetRef.dismiss();
      this._router.navigate(['wishlists'])
  }
}
