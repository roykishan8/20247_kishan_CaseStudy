import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Product';
import { Router } from '@angular/router';
import { User } from 'src/app/User';




@Component({
  selector: 'app-product-list',
  
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product!:Observable<Product[]>
  user!:Observable<User[]>
  searchText: any;
  constructor(private proService:ProductService, private router:Router) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.product=this.proService.getProductList();
  }
  productDetails(id:number){
    this.router.navigate(['details',id]);
  }
  updateProduct(id:number){
    this.router.navigate(['update',id]);
  }
  deleteProduct(id:number){
    this.proService.deleteProduct(id)
    .subscribe(data=>{console.log(data);
    this.loadData();
    })
  }
}