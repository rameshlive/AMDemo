import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
@Component({
  selector: 'app-themeswitcher',
  templateUrl: './themeswitcher.component.html',
  styleUrls: ['./themeswitcher.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        right: '-50px'
      })),
      state('final', style({
        right:'10px'
      })),
      transition('initial=>final', animate('200ms')),
      transition('final=>initial', animate('200ms'))
    ]),
  ]
})
export class ThemeswitcherComponent implements OnInit {
  currentState : string = 'initial';

  @Output() themeClass = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  
  changeState(){
    this.currentState =  this.currentState == 'initial' ? 'final' : 'initial';
  }

  changeTheme(color:string){
    console.log(color)
    this.themeClass.emit(color)
  }

}
