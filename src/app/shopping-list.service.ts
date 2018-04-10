import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ShoppingListService {

  private listItems: Array<any>;
  public listItemsFb: Observable<any[]>;
  private itemsRef: AngularFireList<any>;

  constructor(private httpClient: HttpClient, private db: AngularFireDatabase) {
    this.itemsRef = this.db.list('items');

    this.listItemsFb = this.itemsRef.snapshotChanges().map(
      changes => {
        return changes.map( c => {
          console.log(c.payload.val());

          return ({
            key: c.payload.key,
            name: c.payload.val()['name'],
            disabled: c.payload.val()['disabled']
          })
        })
      }
    )
  }

  //  public findAll() : Observable<Object> {
     
  //  }

   public add(item) {
    this.itemsRef.push(item);
   }

   public remove(item) {
     this.itemsRef.remove(item.key);
   }

   public removeAll() {
    this.itemsRef.remove();
  }

   public edit(item) {
    let key = item.key;
    delete item.key;

    this.itemsRef.update(key, item);
   }

}
