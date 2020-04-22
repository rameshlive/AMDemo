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
    private productSubject = new Subject<any>();
    wishlistProdcuts : any = [];
    wishlistCount : number;
    item: any = {};
    items : any;
    currentProduct :  any = [];
    productids: any = [];

   
    products : any = [];
    currentUser : string;
    
    constructor(private _userService : UserService) { 
        this.wishlistProdcuts = this.getWishlistByCurrentUser();
        this.wishlist.next(this.wishlistProdcuts.length);

        if(localStorage.getItem('products')){
            this.products = JSON.parse(localStorage.getItem('products'))
        }else{
            this.products = [
                {id:'prod1', name : 'Ustraa Cologne Spray' , bgColor : '#010a43', avatar : 'prod1.png'},
                {id:'prod2', name : 'Pantry' , bgColor : '#21bf73',avatar : 'prod2.png'},
                {id:'prod3', name : 'Mobiles' , bgColor : '#c02739',avatar : 'prod3.png'},
                {id:'prod4', name : 'Graphic T-Shirt' , bgColor : '#feb72b',avatar : 'prod4.png'} ,
                {id:'prod5', name : 'Women Multicolor Heels Sandal' , bgColor : '#feb72b',avatar : 'prod5.png'} ,
                {id:'prod6', name : 'Pink Regular Shorts' , bgColor : '#feb72b',avatar : 'prod6.png'} ,
                {id:'prod7', name : '1734WL01 Neo Analog Watch' , bgColor : '#feb72b',avatar : 'prod7.png'} ,
                {id:'prod8', name : ' Blend Straight Kurta' , bgColor : '#feb72b',avatar : 'prod8.png'} 
            ]
            localStorage.setItem('products',JSON.stringify(this.products));
        }
        this.productSubject.next(this.products)
    }
    
    addToWishlist(product:any){
        this.wishlistProdcuts = JSON.parse(localStorage.getItem('wishlists')) || [];
        let currentUser = localStorage.getItem('currentUser');
        product['username'] = currentUser;
        product['status'] = 1;
        this.currentProduct =  this.getWishlistByCurrentUser();
        if( this.currentProduct != undefined){
            //check if seleted product already exists or not
            const isExists = this.currentProduct.find( wishlistItem  => wishlistItem.id === product.id );
            if(!isExists){
                this.currentProduct =  [product,...this.currentProduct] 
                this.item[currentUser] = this.currentProduct;
            }
        }else{
            this.currentProduct =  [product] 
            this.item[currentUser] = this.currentProduct;
        }

        //Save wishlist in local storage
        localStorage.setItem("wishlists",JSON.stringify(this.item));
        this.wishlist.next(this.currentProduct.length);

        this.productSubject.next(this.products)

    }

 
    getTotalWishlistCount():Observable<number>{
        let products = JSON.parse(localStorage.getItem('wishlists')) || [];
        let currentUser = localStorage.getItem('currentUser');
        products = products[currentUser] !== undefined ? products[currentUser] : [];
        products.length = products.length ? products.length : 0;
        this.wishlist.next(products.length);
        return this.wishlist.asObservable();
    }

    getWishlists():any[]{
        return this.wishlistProdcuts;
    }

    getWishlistByCurrentUser():string[]{
        let products = JSON.parse(localStorage.getItem('wishlists')) || [];
        let currentUser = localStorage.getItem('currentUser');
        products = products[currentUser] !== undefined ? products[currentUser] : [];
        products.length = products.length ? products.length : 0;
        this.wishlist.next(products.length);
        return products;
    }

    removeAllWishlists(){
        let products =  this.getWishlistByCurrentUser();
        let currentUser = localStorage.getItem('currentUser');
        this.item[currentUser] = [];
        //Save wishlist in local storage
        localStorage.setItem("wishlists",JSON.stringify(this.item));
        let emptyitems = this.getWishlistByCurrentUser();
        return emptyitems;
    }

    removeWishlistById(wishlistId : string){
        this.wishlistProdcuts = JSON.parse(localStorage.getItem('wishlists')) || [];
        let currentUser = localStorage.getItem('currentUser');
        this.currentProduct =  this.getWishlistByCurrentUser();
        let remainingProducts = this.currentProduct.filter( product => product.id != wishlistId)
        this.item[currentUser] = remainingProducts;
        
        //Save wishlist in local storage
        localStorage.setItem("wishlists",JSON.stringify(this.item));
        
        this.wishlist.next(remainingProducts.length);
        remainingProducts = this.getWishlistByCurrentUser();
        return remainingProducts;
    }


   

    getProducts(){
        this.products = JSON.parse(localStorage.getItem('products'));
       
        let currentUser = this.getCurrentUser();
        let wishlists = JSON.parse(localStorage.getItem('wishlists')) || [];
        
        if( wishlists.length == 0){
            return this.products;
        }
        wishlists = wishlists[currentUser];
        
        if( wishlists != undefined ){
            this.products.map(function(element){
                let isExists = wishlists.find(wishlist => wishlist.id == element.id);
                if (!!isExists){
                    element.isWishlisted = true;
                }else{
                    element.isWishlisted = false;
                }
            })
        }
        return this.products;
    }

    getCurrentUser():any{
        let currentUser;
        if(localStorage.getItem('currentUser')){
            currentUser = localStorage.getItem('currentUser');
        }

        return currentUser;
    }
    
}
