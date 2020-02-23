import { Router } from '@angular/router';
import { observable, interval, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map, takeWhile, finalize } from 'rxjs/operators';
import { timer } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  count$ : Observable<number>;
  countDown = 5;
  message = 'Redirecting after';
  constructor(
    public snackBarRef:MatSnackBar,
    private _router: Router
    ) { }

  ngOnInit() {
    const source = timer(0, 1000);
    this.count$ = source.pipe(
      map(i => this.countDown - i),
      takeWhile(i => i > 0),
      finalize(() => (
        this.snackBarRef.dismiss(),
        this._router.navigate(['dashboard'])
      ))
    )
  }
}

