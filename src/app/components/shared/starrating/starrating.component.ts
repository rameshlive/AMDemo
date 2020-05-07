import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'custom-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.scss']
})
export class StarratingComponent implements OnInit {

  @Input('star') private starCount:number;
  @Input('color') color:string;
  @Input('dimensions') starStyle : string;
  starArray : number[] = [];
  @Input('rating') rating : number;
  currentStyles;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {

    for(let i = 1 ; i < this.starCount + 1; i++){
        this.starArray.push(i)
    }

    this.currentStyles = {     
      'width':  this.starStyle  ? this.starStyle : '16px',  
      'height':  this.starStyle ? this.starStyle : '16px',      
      'line-height':  this.starStyle ? this.starStyle : '16px',
      'font-size': this.starStyle ? this.starStyle : '16px'    
    };

  }

  showIcon(index : number): string{

    let startype = index >= this.rating ? "star_border" : "star";
    return startype;

  }

  updateRating(selectedStar : number){
      this.rating = selectedStar + 1;
      let message = `You rated ${selectedStar + 1} / ${this.starCount}`;
      this._snackBar.open(message,"",{
        duration : 2000
      })
  }

}
