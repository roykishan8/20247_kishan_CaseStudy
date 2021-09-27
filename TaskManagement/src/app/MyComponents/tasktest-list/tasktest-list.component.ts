import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/product.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-tasktest-list',
  templateUrl: './tasktest-list.component.html',
  styleUrls: ['./tasktest-list.component.css']
})
export class TasktestListComponent implements OnInit {

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
    this.router.navigate(['update1',id]);
  }

}
