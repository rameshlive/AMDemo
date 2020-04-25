import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'custom-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  btnStyles;
  @Input('dimensions') inputStyle;
  @Input('color') color;
  @Input('currentProduct') currentProduct;

  @Output() valueChange  = new EventEmitter<Object>();
  product: any;
  selectedItem: string;
  constructor() { }

  ngOnInit() {
    this.btnStyles = {
      'width' : this.inputStyle ? this.inputStyle : '15px',
      'height' : this.inputStyle ? this.inputStyle : '15px',
      'line-height' : this.inputStyle ? this.inputStyle : '15px',
      'font-size' : this.inputStyle ? this.inputStyle : '15px',
      'color': this.color

      
    }

    this.product = this.currentProduct;
  }

  addToWishtlist(id:string,productname:string){
      this.selectedItem = id;
      this.valueChange.emit({id: id,name:productname})
  }

}
