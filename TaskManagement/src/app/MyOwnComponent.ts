import { Component } from "@angular/core";
import { Myservice } from "./MyService";

@Component({
    selector: 'my-own-com',
    template: `
    <div>
    userName : <input type="text" name="t1" /><br>
    password:  <input type="password" name="t2" /><br>
    <button type="submit"> Login </button>
    <p>name: {{show}}</p>
    <p>date: {{date}}</p>
    </div>`,
    providers:[Myservice]
})

export class MyOwnComponent{
    show:String
    date:string
    constructor(my:Myservice){
        this.show=my.getName();
        this.date=my.getDate()

    }

}