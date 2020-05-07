import { SortbyPipe } from './../pipes/sortby.pipe';
import { TestService } from './../test.service';
import { filter } from 'rxjs/operators';
import { CartService } from './../cart.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  products:any;
  categoryname;
  categories : any[] = [
    {catid : 1 , categoryName : 'men' },
    {catid : 2 , categoryName : 'woman' },
    {catid : 3 , categoryName : 'kids' },
    {catid : 4 , categoryName : 'beauty and healthcare' }
  ]

  sortFields : string[] = ['Name','Price','Rating'];
  sortDirections :  string[] = [ 'Asc' ,'Desc'];

  sortField;
  sortDirection;

  constructor(
    private _activateRoute:ActivatedRoute,
    private _cartService : CartService

    ) { 
  }

  ngOnInit() {
      this._activateRoute.params.subscribe( param => {
          let activateId = param["id"];
          this.products = this._cartService.getProducts().filter( product  => product.catid == activateId)
      });

      this._activateRoute.params.subscribe( param => {
          let activateId = param["id"];
          this.categoryname = this.categories.
                                      filter(category =>  category.catid == activateId)
                                      .map(category => category.categoryName)

          if(this.categoryname !== undefined){
            //this._testService.emit(this.categoryname.toString())
            //this.titleService.setTitle(this.categoryname.toString());
          }
      });

    /*   this._router.events.subscribe((event : RouterEvent)  => {
        if ( event instanceof NavigationEnd){
            this.titleService.setTitle(this.categoryname);
        } 
    }) */
      

  
  }

  ngAfterViewInit() {

    //subscribe to params behavior subject to get parameters from activateroute class
    /* this._activateRoute.params.subscribe( param => {
          let activateId = param["id"];
          this.categoryname = this.categories.
                                      filter(category =>  category.catid == activateId)
                                      .map(category => category.categoryName)

          if(this.categoryname !== undefined){
            //this._testService.emit(this.categoryname.toString())
            this.titleService.setTitle(this.categoryname.toString());
          }
      });
      this.cd.detectChanges(); */
  }


}
