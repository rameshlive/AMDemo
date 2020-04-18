import { item } from './../home/home.component';
import { MessageService } from './../message.service';
import { CartService } from './../cart.service';
import { Component, OnInit, Input, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  @ViewChildren('item') favicons: QueryList<any>;
  selectedItem : string;
  constructor(
    private _wishlistSnack : MatSnackBar,
    private _CartService :CartService
    ) { }

  ngOnInit() {
  }
  addToWishlist(id:string,productname: string) {
    this._CartService.addToWishlist(this.product);

    this.selectedItem = id;

    productname = `The product ${productname} addedd to your wishlist!`;
    this._wishlistSnack.open(productname, "Close", {
      duration: 20000000,
      verticalPosition: 'top'
    });
  }
}
