import { Component } from "@angular/core";
import  { List } from "./list"

@Component({
    selector:"app-list",
    template:`
        <h2>Mobile Companies</h2>
        <ul *ngFor = "let list of mobileName">
            <li> {{list}} </li>
        </ul>
        <h2>Laptop Companies</h2>
        <ul *ngFor = "let list of laptopName">
            <li> {{list}} </li>
        </ul>
    `
})

export class ListComponent{
    public mobileName;
    public laptopName;
    constructor(private lap:List, private mob:List){ // Dependency Injection

        this.laptopName=lap.getLaptopCompanyName();
        this.mobileName = mob.getMobileCompanyName();
        // let data = new List();
        // this.mobileName = data.getMobileCompanyName();
        // this.laptopName = data.getLaptopCompanyName();
    }

}