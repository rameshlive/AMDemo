import { CartService } from './../cart.service';
import { LocalusersstorageService } from './../localusersstorage.service';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';

export interface item{
  id: string,
  name: string,
  bgColor : string,
  avatar : string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: any[];
  
  constructor(
    private _cartService:CartService,
    private _productService : LocalusersstorageService) {
      
  }
  ngOnInit() {
    this.items = this._productService.getProducts();
  }

}
