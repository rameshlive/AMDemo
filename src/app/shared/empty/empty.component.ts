import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'wishlist-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {
  @Input() imagetype : string;
  @Input() desc : string;
  constructor() { }

  ngOnInit() {
    
  }

}
