import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertpopup',
  templateUrl: './alertpopup.component.html',
  styleUrls: ['./alertpopup.component.scss']
})
export class AlertpopupComponent implements OnInit {

  constructor(
      private _alertDialogRef : MatDialogRef<AlertpopupComponent>,
      private _router : Router
    ) { }

  ngOnInit() {}

  closeAlert(){
      this._alertDialogRef.close();
      this._router.navigate(['login'])
  }
}
