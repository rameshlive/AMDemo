import { CartService } from './../cart.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-wishlistinfo',
  templateUrl: './wishlistinfo.component.html',
  styleUrls: ['./wishlistinfo.component.scss']
})
export class WishlistinfoComponent implements OnInit {
  wishlists:any = [];
  imagetype : string = 'shopping_basket';
  message : string = "Your wishlist is empty!"
  desc : string = "Save your favourite items here."
  btnText = 'continue shopping' 
  constructor(
    private _cartService : CartService,
    private titleService : Title
    
  ) { }

  ngOnInit() {
    this.loadWishlists();
  }

  loadWishlists(){
    this.wishlists = this._cartService.getWishlistByCurrentUser();
  }

  removeAllwishlist(){
    this.wishlists = this._cartService.removeAllWishlists();
  }

  removeWishlistById(selectedId : string){
    
    this.wishlists = this._cartService.removeWishlistById(selectedId);
  }
}
