import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collectionbanner',
  templateUrl: './collectionbanner.component.html',
  styleUrls: ['./collectionbanner.component.scss']
})
export class CollectionbannerComponent implements OnInit {
  categories;
  constructor() { }

  ngOnInit() {
    this.categories  = [
      {catid : 1 , categoryName : 'men' },
      {catid : 2 , categoryName : 'woman' },
      {catid : 3 , categoryName : 'kids' },
      {catid : 4 , categoryName : 'beauty and healthcare' }
    ]
  }

}
