import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';

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
      {name : 'Apparels' , bgColor : '#010a43', avatar : '1.jpg'},
      {name : 'Pantry' , bgColor : '#21bf73',avatar : '2.jpg'},
      {name : 'Mobiles' , bgColor : '#c02739',avatar : '3.jpeg'},
      {name : 'Fashion' , bgColor : '#feb72b',avatar : '4.jpeg'} 
    ]
  }
  ngOnInit() {
  }
  
}
