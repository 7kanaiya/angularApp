import { Component } from "@angular/core";
import  { List } from "./list"

@Component({
    selector:"app-list",
    template:`

        <app-users [likeCount] = "likeCount"></app-users> 


        <h2>Mobile Companies</h2>
        <ul *ngFor = "let list of mobileName">
            <li> {{list}} </li>
        </ul>
        <h2>Laptop Companies</h2>
        <ul *ngFor = "let list of laptopName">
            <li> {{list}} </li>
        </ul>

        
    `
    //Like inheriting the value from parent to child the child component in the parent.
})

export class ListComponent{
    public mobileName;
    public laptopName;
    public likeCount:number = 10;
    constructor(private lap:List, private mob:List){ // Dependency Injection

        this.laptopName=lap.getLaptopCompanyName();
        this.mobileName = mob.getMobileCompanyName();
        // let data = new List();
        // this.mobileName = data.getMobileCompanyName();
        // this.laptopName = data.getLaptopCompanyName();
    }

}