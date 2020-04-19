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

@Component({
  selector: 'ngbd-carousel-basic',
  template : `<ngb-carousel *ngIf="images">
  <ng-template ngbSlide>
    <div class="picsum-img-wrapper">
      <img [src]="images[0]" alt="Random first slide">
    </div>
    <div class="carousel-caption">
      <h3>{{slides[0]}}</h3>
    </div>
  </ng-template>
  <ng-template ngbSlide>
    <div class="picsum-img-wrapper">
      <img [src]="images[1]" alt="Random second slide">
    </div>
    <div class="carousel-caption">
      <h3>{{slides[1]}}</h3>
    </div>
  </ng-template>
  <ng-template ngbSlide>
    <div class="picsum-img-wrapper">
      <img [src]="images[2]" alt="Random third slide">
    </div>
    <div class="carousel-caption">
      <h3>{{slides[2]}}</h3>
    </div>
  </ng-template>
</ngb-carousel>`
  })
export class NgbdCarouselBasic {
  slides = ['WOMEN', 'MEN', 'KID'];
  images = ['women', 'men', 'kid'].map((name) => `./assets/${name}.jpg`);
}
