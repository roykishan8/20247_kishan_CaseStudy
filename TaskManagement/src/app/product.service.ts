import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./Product";

@Injectable({
    providedIn:'root'
})

export class ProductService{
    createProduct(product: Product) {
      throw new Error('Method not implemented.');
    }
    private baseUrl = "http://localhost:8087/task";

    constructor(private httpClient:HttpClient){ }

    getProductList():Observable<any>{
        return this.httpClient.get(this.baseUrl);
    }
    create(product: Object): Observable<Object> {
        return this.httpClient.post(this.baseUrl, product);
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

