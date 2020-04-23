import {Component} from "@angular/core";

@Component({
    selector:"app-gender",
    templateUrl:"./gender.component.html"
})

export class GenderComponent{
    public male = {
        name: "John Doe",
        imgurl:"../assets/img_avatar.png"
    }
    public female= {
        name:"Emma Doe",
        imgurl:"../assets/female-icon-27.png"
    }
    public selectUser;
}