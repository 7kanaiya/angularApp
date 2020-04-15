import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from "./list.component";
import { List } from "./list";
@NgModule({
  declarations: [
    AppComponent, ListComponent
  ],
  imports: [
    BrowserModule, 
  ],
  providers: [List],
  bootstrap: [AppComponent]
})
export class AppModule { }
