import { UserService } from './../user/user.service';
import { Observable, timer, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { map, takeWhile, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent implements OnInit {
  count$ = new Observable<number>();
  countdown = 60;
  count;
  subscriberone;

  constructor(
    private dialogRef: MatDialogRef<TimeoutComponent>,
    private _router : Router,
    private _userService : UserService
    ) { }

  ngOnInit() {
    this.loadObservable();
    this.subscriberone = this.count$.subscribe(
      (x) => {this.count = x;console.log(x)},
      err => console.error('Observer got an error: ' + err),
      () => {
        this.dialogRef.close();
        this._userService.logOut();
      }
    )
    //this.subscriberone.unsubscribe();
  }

  onNoClick(){
      this.dialogRef.close();
      this._userService.logOut();
      this._router.navigate(['login'])
  }

  onYesClick(){
      this.dialogRef.close();
      console.log("onYesClick");
      this.subscriberone.unsubscribe();
  }

  loadObservable(){
    const source = timer(0, 1000);
    this.count$ = source.pipe(
      map(i => this.countdown - i),
      takeWhile(i => i > 0)
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriberone.unsubscribe();
  }
}
