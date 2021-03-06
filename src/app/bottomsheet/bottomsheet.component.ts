import { MessageService } from './../message.service';
import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.scss']
})
export class BottomsheetComponent implements OnInit {
  constructor(private _messageService : MessageService) { }

  ngOnInit() {
  }
  changeTheme(value:string):void{
    let bodytag = document.getElementsByTagName('body')[0];
    bodytag.className = '';
    this._messageService.updateMessage(value);
    bodytag.className = value + '-theme';
  }
}
