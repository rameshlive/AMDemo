import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalusersstorageService {
  usernames:string[] = [];
  products : any = [];
  items : any = [];
  currentUser : string;
  constructor() {
        this.items = [
          {id:'prod1', name : 'Ustraa Cologne Spray' , bgColor : '#010a43', avatar : 'prod1.png'},
          {id:'prod2', name : 'Pantry' , bgColor : '#21bf73',avatar : 'prod2.png'},
          {id:'prod3', name : 'Mobiles' , bgColor : '#c02739',avatar : 'prod3.png'},
          {id:'prod4', name : 'Graphic T-Shirt' , bgColor : '#feb72b',avatar : 'prod4.png'} ,
          {id:'prod5', name : 'Women Multicolor Heels Sandal' , bgColor : '#feb72b',avatar : 'prod5.png'} ,
          {id:'prod6', name : 'Pink Regular Shorts' , bgColor : '#feb72b',avatar : 'prod6.png'} ,
          {id:'prod7', name : '1734WL01 Neo Analog Watch' , bgColor : '#feb72b',avatar : 'prod7.png'} ,
          {id:'prod8', name : ' Blend Straight Kurta' , bgColor : '#feb72b',avatar : 'prod8.png'} 
        ]
    
   }

  getUsers():String[]{
      //Get the users from localstorage
      let users =  JSON.parse(localStorage.getItem('users'));
      //Ierate through each users and get the first poprtioon of username  from email field using split method
      if( users != null ){
          this.usernames = users.map(user => user.username.split('@')[0])
      }
      return this.usernames;
  }

  getProducts():String[]{
      /*let products = JSON.parse(localStorage.getItem('products'));
      
      let wishlists = JSON.parse(localStorage.getItem('wishlists'));
      if( wishlists != null){
           wishlists = wishlists[this.currentUser] !== undefined ? wishlists[this.currentUser] : [];
      }
      if( products == null ){
          products.map(function(element){
              console.log(element)
          })
          products = this.items;
          localStorage.setItem("products",JSON.stringify(products))
      }*/

      if(localStorage.getItem('currentUser')){
          this.currentUser = localStorage.getItem('currentUser');
      }
      var wishlists = JSON.parse(localStorage.getItem('wishlists'));
      if( wishlists != null){
           wishlists = wishlists[this.currentUser] !== undefined ? wishlists[this.currentUser] : [];
      }
       this.items.map(function(element){
          let elementId = element.id;
          let isExists = wishlists.find(wishlist => wishlist.id == elementId);
          if (!!isExists){
              element.isWishlisted = true;
          }else{
              element.isWishlisted = false;
          }

       })
       
      return this.items;
  }
}

