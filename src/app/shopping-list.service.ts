import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingListService {

  private listItems: Array<any>;

  constructor(private httpClient: HttpClient) {
    // this.listItems = [{
    //   name: 'Bread',
    //   disabled: false
    // },
    // {
    //   name: 'Butter',
    //   disabled: false
    // },
    // {
    //   name: 'Coffee',
    //   disabled: false
    // },
    // {
    //   name: 'Cookies',
    //   disabled: true
    // }];
   }

   /**
    * findAll
  : Array<any>   */
   public findAll() : Observable<Object> {
     //return this.listItems;
     return this.httpClient.get(`${environment.firebase.databaseURL}/items.json`);
   }

   public add(item): Observable<Object> {
     //this.listItems.unshift(item);
    return this.httpClient.post(`${environment.firebase.databaseURL}/items.json`, item);
   }

   public remove(item): Observable<Object> {
    //  let index = this.listItems.indexOf(item);
    //  this.listItems.splice(index, 1);
    return this.httpClient.delete(`${environment.firebase.databaseURL}/items/${item.key}.json`);
   }

  //  public cross(item) {
  //    let index = this.listItems.indexOf(item);
  //    this.listItems[index].disabled = true;
  //  }

   public edit(item): Observable<Object> {
    return this.httpClient.put(`${environment.firebase.databaseURL}/items/${item.key}.json`, item);
   }

}
