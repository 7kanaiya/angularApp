import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from "./list.component";
import { List } from "./list";
import { userComponent } from './user.component';
@NgModule({
  declarations: [
    AppComponent, ListComponent, userComponent
  ],
  imports: [
    BrowserModule, 
  ],
  providers: [List],
  bootstrap: [AppComponent]
})
export class AppModule { }
