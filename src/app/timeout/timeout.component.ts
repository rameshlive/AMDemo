import { UserService } from './../user/user.service';
import { Observable, timer } from 'rxjs';
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
  countdown = 30;
  constructor(
    private dialogRef: MatDialogRef<TimeoutComponent>,
    private _router : Router,
    private _userService : UserService
    ) { }

  ngOnInit() {
    const source = timer(0, 1000);
    this.count$ = source.pipe(
      map(i => this.countdown - i),
      takeWhile(i => i > 0),
      finalize(() => (
        this.dialogRef.close(),
        this._userService.logOut(),
        this._router.navigate(['login'])
      ))
    )
  }

  onNoClick(){
      this.dialogRef.close();
      this._userService.logOut();
      this._router.navigate(['login'])
  }

  onYesClick(){
      clearTimeout(this._userService.userActivity)
      this.dialogRef.close();
  }
}
