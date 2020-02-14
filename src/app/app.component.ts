import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,OnDestroy{

  constructor(private _spinner: NgxSpinnerService){ 
  }
  ngOnInit(): void {
    this._spinner.show();

    setTimeout(() => {
      this._spinner.hide();
    },5000)
  }


  ngOnDestroy(): void {
  }
}
