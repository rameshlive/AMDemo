import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortby'
})
export class SortbyPipe implements PipeTransform {

  transform(items: any, params?: any[]): any {
  
    let sortField = params[0];
    let sortDirection = params[1];

    let modifier = 1;

    if( sortField !== undefined){
        sortField = sortField.toString().toLowerCase();
    }


    if( sortDirection !== undefined){
       sortDirection = sortDirection.toString().toLowerCase();
       if (sortDirection == "desc"){
           modifier = -1;
       }
    }

    console.log(sortDirection)
  
    items.sort((a:any,b:any) => {
      if( a[sortField] >  b[sortField] ){
          return 1 * modifier;
      }else if( a[sortField] <  b[sortField] ){
          return -1 * modifier;
      }else{
          return 0;
      }
    })

     return items;
  }

}
