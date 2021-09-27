import { Component } from "@angular/core";
import { Myservice } from "./MyService";

@Component({
    selector: 'my-com1',
    template: `<div>My name is {{name}}</div>`,
    // providers:[Myservice]
})
export class MyComponentService{
    name:string
    constructor(private myS:Myservice){
        this.name=myS.getName()
    }
}