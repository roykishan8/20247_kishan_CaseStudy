import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./User";


@Injectable({
    providedIn:'root'
})

export class UserService{
    createProduct(user: User) {
      throw new Error('Method not implemented.');
    }
    private baseUrl = "http://localhost:8087/user";

    constructor(private httpClient:HttpClient){ }

    getProductList1():Observable<any>{
        return this.httpClient.get(this.baseUrl);
    }
    create(user: Object): Observable<Object> {
        return this.httpClient.post(this.baseUrl, user);
      }

    updateProduct(id:number,value:any): Observable<Object> {
      return this.httpClient.put(`${this.baseUrl}/${id}`, value);
    }
    deleteProduct(id:number): Observable<Object> {
      return this.httpClient.delete(`${this.baseUrl}/${id}`,{responseType: 'text'});
    }
    getProduct(id:number): Observable<Object> {
      return this.httpClient.get(`${this.baseUrl}/${id}`);
    }

    }

