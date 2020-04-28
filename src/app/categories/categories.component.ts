import { filter } from 'rxjs/operators';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  products;
  constructor(
    private _activateRoute:ActivatedRoute,
    private _cartService : CartService

    ) { 
  }

  ngOnInit() {

     this._activateRoute.params.subscribe( param => {
        let activateId = param["id"];
        this.products = this._cartService.getProducts().filter( product  => product.catid == activateId)
     });
  }


}
