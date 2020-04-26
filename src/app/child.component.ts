import { Component,Input,Output,EventEmitter} from "@angular/core"

@Component({
    selector:"app-child",
    template:`
    <div class="container">
        <div class = "row">
            <div class="col-md-12">
                <h1>
                    Child Section
                </h1>
                {{name}}

                <button type="button" class="btn btn-danger btn-md"
                (click)= "addEmail()"
                >Click</button>
            </div>
        </div>
    </div>
    `
})

export class ChildComponent{
   @Input() public name:String;
    public mail: String  = "k@gmail.com";
    @Output() public event = new EventEmitter();
   addEmail(){
        this.event.emit(this.mail);
   }
};