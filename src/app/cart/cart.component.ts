import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  imagetype : string = 'shopping_cart';
  message : string = "Your Shopping Cart is empty!"
  desc : string = "Save your favourite items here."
  btnText = 'continue shopping' 
  constructor() { }

  ngOnInit() {
  }

}
