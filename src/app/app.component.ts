import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template:`
  <h1> {{title}}</h1>
  <app-list></app-list>
  `
})

export class AppComponent{
  public title:string = "hello world";

}