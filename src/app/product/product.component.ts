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
  selectedItem : string;
  @Input('closeIcon') closeIcon;
  btnStyles;
  constructor(
    private _wishlistSnack : MatSnackBar,
    private _CartService :CartService
    ) { }

  ngOnInit() {
    this.btnStyles = {
      'width' : '24px',
      'height' : '24px',
      'line-height' : '24px',
      'font-size' : '24px',
      'color': 'primary'
    }
  }

  addToWishlist(product,selectedProduct){
    this._CartService.addToWishlist(selectedProduct);
    //this.selectedItem = id;
    let productname = `${product.name} added to your wishlist!`;
    this._wishlistSnack.open(productname, "", {
      duration: 2000,
      verticalPosition: 'top'
    }); 

  }
 /*  addToWishlist(id:string,productname: string) {
    this._CartService.addToWishlist(this.product);
    
    this.selectedItem = id;
    productname = `${productname} added to your wishlist!`;
    this._wishlistSnack.open(productname, "", {
      duration: 2000,
      verticalPosition: 'top'
    });
  } */
}
