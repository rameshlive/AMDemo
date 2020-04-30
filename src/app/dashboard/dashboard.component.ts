import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, NavigationStart, NavigationCancel, NavigationError, UrlTree, RouterEvent } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading: boolean = false;

  constructor(
    private _router:Router,
    private titleService : Title
    ) { }

  ngOnInit() {
  }
}
