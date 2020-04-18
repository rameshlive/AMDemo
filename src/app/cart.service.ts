import { map } from 'rxjs/operators';
import { UserService } from './user/user.service';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart = new Subject<number>();
  private wishlist = new Subject<number>();
  wishlistProdcuts : any = [];
  wishlistCount : number;
  item: any = {};
  currentProduct :  any = [];
  productids: any = [];
  
  constructor(private _userService : UserService) { 
      this.wishlistProdcuts = this.getWishlistByCurrentUser();
      this.wishlist.next(this.wishlistProdcuts.length);
  }
  
  addToWishlist(product:any){
      this.wishlistProdcuts = JSON.parse(localStorage.getItem('wishlists')) || [];
      let currentUser = localStorage.getItem('currentUser');
      product['username'] = currentUser;
      product['status'] = 1;

      this.currentProduct =  this.getWishlistByCurrentUser();

      if( this.currentProduct != undefined){
          this.currentProduct =  [product,...this.currentProduct] 
          this.item[currentUser] = this.currentProduct;
      }else{
          this.currentProduct =  [product] 
          this.item[currentUser] = this.currentProduct;
      }
      //Save wishlist in local storage
      localStorage.setItem("wishlists",JSON.stringify(this.item));
      this.wishlist.next(this.currentProduct.length);
  }
  getTotalWishlistCount():Observable<number>{
      return this.wishlist.asObservable();
  }
  getTotalCount():Observable<number>{
      return this.wishlist.asObservable();
  }

  getWishlists():any[]{
      return this.wishlistProdcuts;
  }

  getWishlistByCurrentUser():string[]{
      let products = JSON.parse(localStorage.getItem('wishlists')) || {};
      let currentUser = localStorage.getItem('currentUser');
      products = products[currentUser] != undefined ? products[currentUser] : [];
      this.wishlist.next(products.length);
      return products;
  }
    
}
