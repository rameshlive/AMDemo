import { WishlistinfoComponent } from './../wishlistinfo/wishlistinfo.component';
import { MatSnackBar } from '@angular/material';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
MatSnackBar
export interface item{
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
  items: item[];

  constructor(private _userService:UserService) {
    this.items = [
      {name : 'Apparels' , bgColor : '#010a43', avatar : 'aaaa.png'},
      {name : 'Pantry' , bgColor : '#21bf73',avatar : 'bgeek-img-4_1.png'},
      {name : 'Mobiles' , bgColor : '#c02739',avatar : 'aaaa.png'},
      {name : 'Fashion' , bgColor : '#feb72b',avatar : 'bgeek-img-4_1.png'} 
    ]
  }
  ngOnInit() {
  }

}
