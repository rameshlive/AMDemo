import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart = new Subject<number>();
  wishlistCount:number = 0;
  wishlistProdcuts : any = [];
  constructor() { 

  }

  addWishlist(product:any){
    this.wishlistProdcuts = JSON.parse(localStorage.getItem('wishlists')) || [];
    console.log(this.wishlistProdcuts);
    this.wishlistProdcuts.push(product);
    localStorage.setItem("wishlists",JSON.stringify(this.wishlistProdcuts));
    this.cart.next(this.wishlistCount = this.wishlistCount + 1);
  }

  getTotalCount():Observable<number>{
      return this.cart.asObservable();
  }

  getWishlists():any[]{
    return this.wishlistProdcuts;
  }

}
