import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input("item") private listItem: any;
  public deleted: boolean = false;

  constructor(private myShoppingListService: ShoppingListService) { }

  ngOnInit() {
    console.log(this.listItem);
  }

  public removeItem() {
    this.myShoppingListService.remove(this.listItem).subscribe(
      response => {
        console.log("Item excluido");  
        this.deleted = true;      
      },
      error => {
        console.error("Errroooou");        
      }
    );
  }

  public crossItem() {
    this.myShoppingListService.edit({key: this.listItem.key, name: this.listItem.name, disabled: true}).subscribe(
      response => {
        console.log("Item editado");   
        this.listItem.disabled = true;
      },
      error => {
        console.error("Errroooou");        
      }
    );
  }

}
