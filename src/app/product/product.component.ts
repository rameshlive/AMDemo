import { MessageService } from './../message.service';
import { CartService } from './../cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  constructor(
    private _wishlistSnack : MatSnackBar,
    private _CartService :CartService
    ) { }

  ngOnInit() {
  }
  openSnackBar(message: string) {
    this._CartService.addWishlist(this.product);
    message = `The product ${message} addedd to your wishlist!`;
    this._wishlistSnack.open(message, "Close", {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: ['mat-toolbar', 'mat-accent']
    });

  }
}
