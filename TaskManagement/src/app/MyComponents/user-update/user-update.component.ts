import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  id!: number;
  product!: User

  constructor(private route:ActivatedRoute,private router: Router, private pservice:UserService) { }

  ngOnInit(){

    this.product=new User()
    this.id=this.route.snapshot.params['id'];
    this.pservice.getProduct(this.id).subscribe((data:any)=>{
      //this.products=data
      console.log(data)
      this.product=data
      
    })
  }
  updateProducts(){
    this.pservice.updateProduct(this.id,this.product)
    .subscribe(data=>console.log(data));
    this.product=new  User();
    this.gotoList();
  }

  onsubmit(){
    this.updateProducts();
  }
  gotoList(){
    this.router.navigate(['/user'])
  }

  

 

}
