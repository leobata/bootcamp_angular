import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListService } from './shopping-list.service';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routing.module';
import { AuthService } from './auth.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  providers: [
    ShoppingListService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
