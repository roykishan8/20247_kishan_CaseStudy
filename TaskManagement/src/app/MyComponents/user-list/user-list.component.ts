import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserService } from 'src/app/user.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  
  user1!:Observable<User[]>
  searchText: any;
  constructor(private proService:UserService, private router:Router) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.user1=this.proService.getProductList1();
    console.log(this.user1)
    
  }
  productDetails(id:number){
    this.router.navigate(['details1',id]);
  }
  updateProduct(id:number){
    this.router.navigate(['update2',id]);
    
  }
  deleteProduct(id:number){
    this.proService.deleteProduct(id)
    .subscribe(data=>{console.log(data);
    this.loadData();
    })
  }
}