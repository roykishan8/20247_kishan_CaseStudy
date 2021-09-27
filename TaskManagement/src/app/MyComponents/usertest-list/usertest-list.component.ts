import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-usertest-list',
  templateUrl: './usertest-list.component.html',
  styleUrls: ['./usertest-list.component.css']
})
export class UsertestListComponent implements OnInit {
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

}
