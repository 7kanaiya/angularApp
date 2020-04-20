import { Component, Input } from "@angular/core";

@Component({
    selector: "app-users",
    // <h1 [style.color] = "chooseColor ? 'red' : 'yellow'" 
    //     [style.backgroundColor] = "chooseColor ? 'black':'teal'"
    // [class.content] = "chooseClass"
    // [class.jumbo] = "!chooseClass"

    template: ` 

    
    <h1 
        [ngStyle] = "{
            color:chooseColor ? 'red' : 'yellow',
            backgroundColor: chooseColor?'black':'teal'
        }"
        (click) = "action()"
    
    >Hello User</h1>
    <div
      

        [ngClass]= "{
            content:chooseClass,
            jumbo:!chooseClass
        }"
        (click) = "changeClass()"
    >
    
    </div>    


    <button type="button" class="btn"
    [class.btn-primary]="chooseColor"
    [class.btn-danger]="!chooseColor"
    >Click Me</button>

    <i class="fa fa-2x " aria-hidden="true"
    [class.fa-heart-o] = "isLiked"
    [class.fa-heart] = "!isLiked"

    (click) = "onLikeClick()"
    ></i>
    {{likeCount}}
    


    `,
    styles:[`
        .content{
            width:200px;
            height:200px;
            background-color:purple;
        }
        .jumbo{
            height:400px;
            width:400px;
            background-color:orange;
        }
    `]
})

export class userComponent{
    public chooseColor:boolean = true;
    public chooseClass:boolean = true;
    public isLiked:boolean = true;
    @Input() public likeCount:number;

    action(){
        this.chooseColor = !this.chooseColor;
    }
    changeClass(){
        this.chooseClass = !this.chooseClass;
    }

    onLikeClick(){
        this.isLiked = !this.isLiked;
        this.isLiked?this.likeCount--:this.likeCount++;
    }
}