import { Router } from '@angular/router';
import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'wishlist-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {
  @Input() imagetype : string;
  @Input() desc : string;
  @Input() message : string;
  @Input() btnText : string;
  @Input() color : string;
  constructor(private _router: Router) { }

  ngOnInit() {
    
  }

  continueBtn(){
    this._router.navigate(['dashboard'])
  }

}
