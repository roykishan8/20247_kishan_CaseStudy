import { Injectable } from "@angular/core";
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { IEmployee } from "./employee";
import { Observable } from "rxjs";
import {share} from 'rxjs/operators'

@Injectable({
    providedIn:'root'
})
export class EmployeeServiceService{
    private url: string ="/assets/data/employees.json"

    constructor(private http:HttpClient){ }

    getEmployees(): Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.url)
    }
    errorHandler(error: HttpErrorResponse){
        return Observable.throw(error.message || "server error")
    }
}