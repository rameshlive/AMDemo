import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'custom-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {
  @Input('color') color:string;
  @Input('inputStyle') inputStyle : string;
  @Input('product') product;
  currentStyles;
  @Output() addtocart = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
      this.currentStyles = {
        'fons-size': this.inputStyle ?  this.inputStyle : '16px',
        'width': this.inputStyle ?  this.inputStyle : '16px',
        'height': this.inputStyle ?  this.inputStyle : '16px', 
        'line-height' : this.inputStyle ?  this.inputStyle : '16px'
      }
  }
  
  onSubmit(productid : string, productname : string ){
    this.addtocart.emit({id : productid, name : productname})
  }


}
