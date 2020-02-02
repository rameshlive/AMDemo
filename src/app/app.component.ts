import { Component, ViewEncapsulation } from '@angular/core';
ViewEncapsulation
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None
})

export class AppComponent {
  title = 'Angular Material Project Demo';
}
