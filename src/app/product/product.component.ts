import { item } from './../home/home.component';
import { MessageService } from './../message.service';
import { CartService } from './../cart.service';
import { Component, OnInit, Input, ViewChild, QueryList, ViewChildren, Output, EventEmitter } from '@angular/core';
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
  @Output() removewishlist = new  EventEmitter();
  constructor(
    private _wishlistSnack : MatSnackBar,
    private _CartService :CartService
    ) { 
     
    }

  ngOnInit() {
    this.btnStyles = {
      'width' : '20px',
      'height' : '20px',
      'line-height' : '20px',
      'font-size' : '20px',
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

  removeItem(selectedId : string){
     this.removewishlist.emit(selectedId)
  }
}
