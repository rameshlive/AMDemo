import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';

export interface item{
  name: string,
  bgColor : string
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
      {name : 'Apparels' , bgColor : '#010a43'},
      {name : 'Pantry' , bgColor : '#21bf73'},
      {name : 'Mobiles' , bgColor : '#c02739'},
      {name : 'Fashion' , bgColor : '#feb72b'} 
    ]
  }
  ngOnInit() {
  }
  
}
