import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'home-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  items: any[];
  constructor(private _cartService:CartService) { }

  ngOnInit() {
    this.items = this._cartService.getProducts();
  }

}
