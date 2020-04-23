import { MatSnackBar } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'custom-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  @Input('color') color:string;
  @Input('inputStyle') inputStyle : string;
  likebtn : string;
  liketext : string;
  btnStyles : any;
  constructor(
    private _snackbar : MatSnackBar
  ) { }

  ngOnInit() {
    this.likebtn = 'thumb_up';
    this.btnStyles = {
      'width' : this.inputStyle ? this.inputStyle : '15px',
      'height' : this.inputStyle ? this.inputStyle : '15px',
      'line-height' : this.inputStyle ? this.inputStyle : '15px',
      'font-size' : this.inputStyle ? this.inputStyle : '15px'
    }
  }

  onSubmit(){
     this.likebtn == 'thumb_up' ? this.thumbDown() : this.thumbUp();
    
     this._snackbar.open(`You ${this.liketext} this product`,"",{
       duration : 1000
     })
  }

  thumbDown(){
      this.likebtn = 'thumb_down';
      this.liketext = 'Liked';
  }

  thumbUp(){
      this.likebtn = 'thumb_up';
      this.liketext = 'disLiked';
  }

}
