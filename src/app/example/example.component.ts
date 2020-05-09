import { CartService } from './../cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  slides = [
    /*{img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}*/
  ];

  @Input() categoryId :any;
  slideConfig = {
    "slidesToShow": 3.5, 
    "slidesToScroll": 1,
     "arrows": true,
     "infinite": false
  };

  constructor(private _cartService : CartService) { }

  ngOnInit() {
    console.log(this.categoryId)
    this.slides =  this._cartService.getProducts();
    this.slides = this._cartService.getProducts().filter( product  => product.catid == this.categoryId)
  }
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

}
