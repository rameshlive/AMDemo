import { map } from 'rxjs/operators';
import { UserService } from './user/user.service';
import { Subject, Observable, BehaviorSubject, observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    public cart = new Subject<number>();
    private wishlist = new Subject<number>();
    private productSubject = new Subject<any>();
    private categories = new Subject<any>();

    $objCategories = this.categories.asObservable();

    
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
        this.products = [
                {id:'prod1', catid:1, price:24.99, rating:3, name : 'Ustraa Cologne Spray' , bgColor : '#010a43', avatar : 'prod1.jpg',instock: 'yes'},
                {id:'prod2', catid:1, price:133.99, rating:1, name : 'T-shirts Combo' , bgColor : '#21bf73',avatar : 'prod2.jpg',instock: 'yes'},
                {id:'prod3', catid:2, price:5.99, rating:4, name : 'White Winters' , bgColor : '#c02739',avatar : 'prod3.jpg',instock: 'yes'},
                {id:'prod4', catid:1, price:67.99, rating:2, name : 'Graphic T-Shirt' , bgColor : '#feb72b',avatar : 'prod4.jpg',instock: 'no'} ,
                {id:'prod5', catid:1, price:45.99, rating:3, name : 'Women Heels Sandal' , bgColor : '#feb72b',avatar : 'prod5.jpg',instock: 'yes'} ,
                {id:'prod6', catid:1, price:34.99, rating:1, name : 'Black Full Sleeve' , bgColor : '#feb72b',avatar : 'prod6.jpg',instock: 'yes'} ,
                {id:'prod7', catid:1, price:4.99, rating:3, name : 'Neo Analog Watch' , bgColor : '#feb72b',avatar : 'prod7.jpg',instock: 'no'}, 
                {id:'prod8', catid:3, price:83.99, rating:5, name : 'Ustraa Cologne Spray' , bgColor : '#010a43', avatar : 'prod8.jpg',instock: 'yes'},
                {id:'prod9', catid:3, price:57.99, rating:2, name : 'Pantry' , bgColor : '#21bf73',avatar : 'prod9.jpg',instock: 'yes'},
                {id:'prod10',catid:3, price:24.99, rating:3, name : 'Mobiles' , bgColor : '#c02739',avatar : 'prod10.jpg',instock: 'yes'},
                {id:'prod11',catid:4, price:66.99, rating:1, name : 'Graphic T-Shirt' , bgColor : '#feb72b',avatar : 'prod11.jpg',instock: 'no'} ,
                {id:'prod12',catid:1, price:88.99, rating:3, name : 'Women  Heels Sandal' , bgColor : '#feb72b',avatar : 'prod12.jpg',instock: 'yes'} ,
                {id:'prod13',catid:1, price:24.99, rating:4, name : 'Pink Regular Shorts' , bgColor : '#feb72b',avatar : 'prod13.jpg',instock: 'yes'} ,
                {id:'prod14',catid:2, price:12.99, rating:4, name : 'Neo Analog Watch' , bgColor : '#feb72b',avatar : 'prod14.jpg',instock: 'yes'},
                {id:'prod15',catid:2, price:8.99, rating:3, name : 'Blue Birds' , bgColor : '#feb72b',avatar : 'prod15.jpg',instock: 'no'}, 
                {id:'prod16',catid:2, price:24.99, rating:3, name : 'Yellow Fancy Dress' , bgColor : '#feb72b',avatar : 'prod16.jpg',instock: 'yes' }
            ]
            localStorage.setItem('products',JSON.stringify(this.products));
        
        this.productSubject.next(this.products);
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
        localStorage.setItem("wishlists",JSON.stringify(this.item));
        let emptyitems = this.getWishlistByCurrentUser();
        return emptyitems;
    }

    // Remove Wishlists by selected id
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
    getProductsByCatId(){
        this.products = JSON.parse(localStorage.getItem('products'));
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
