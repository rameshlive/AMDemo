import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {
  @Input('color') color:string;
  @Input('inputStyle') inputStyle : string;
  currentStyles;
  constructor() { }

  ngOnInit() {
      this.currentStyles = {
        'fons-size': this.inputStyle ?  this.inputStyle : '16px',
        'width': this.inputStyle ?  this.inputStyle : '16px',
        'height': this.inputStyle ?  this.inputStyle : '16px', 
        'line-height' : this.inputStyle ?  this.inputStyle : '16px'
      }
  }

}
