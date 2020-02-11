import { observable, interval, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map, takeWhile, finalize } from 'rxjs/operators';
import { timer } from 'rxjs';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  count$ : Observable<number>;
  countDown = 5;
  message = 'Successfully Logged In Redirecting after';
  constructor(public snackBarRef:MatSnackBar) { }

  ngOnInit() {
    const source = timer(0, 1000);
    this.count$ = source.pipe(
      map(i => this.countDown - i),
      takeWhile(i => i > 0),
      finalize(() => (
        this.snackBarRef.dismiss()
      ))
    )
  }
}
