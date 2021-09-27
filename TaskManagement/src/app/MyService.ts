import { Injectable } from "@angular/core"
@Injectable({
    providedIn: 'root'
})
export class Myservice{
    getName():string{
        return "kishan"
    }
    getDate():string{
        return "show date"
    }
}