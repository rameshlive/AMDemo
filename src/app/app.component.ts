import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,OnDestroy{
  title = 'Angular Material Project Demo';
  hide:boolean = true;
  constructor(private _snackBar: MatSnackBar){ 
  }
  ngOnInit(): void {
      
  }

  openSnackbar(){
      this._snackBar.open('Submitted Succesfully','Close',{
        duration:2000
      })
  }
  ngOnDestroy(): void {
  }
}
