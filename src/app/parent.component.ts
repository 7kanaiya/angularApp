import {Component} from "@angular/core";

@Component({
    selector:"app-parent",
    template:`
    <div class="container">
        <div class = "row">
            <div class="col-md-12">
                <h1>Parent Section</h1>
                <h2>{{usermail}}</h2>
                <app-child [name]="username" (event) = "addUser($event)"></app-child>
            </div>
        </div>
    </div>
    `
})

export class ParentComponent{
    public username:String = "Kanaiya";
    public usermail:String;
    addUser(data){
        this.usermail= data;
    }
};