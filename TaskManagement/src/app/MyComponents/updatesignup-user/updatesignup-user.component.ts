import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-updatesignup-user',
  templateUrl: './updatesignup-user.component.html',
  styleUrls: ['./updatesignup-user.component.css']
})
export class UpdatesignupUserComponent implements OnInit {

  product: User=new User()
  submitted:boolean=false;

  constructor(private proService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  newProduct():void{
    this.submitted=false;
    this.product=new User();
  }
  addSave(){
    this.proService.create(this.product).subscribe((data: any)=>console.log(data));
    this.product=new User();
    this.gotoList();


  }
  onsubmit(){
    this.submitted=true;
    this.addSave()
    

  }
  gotoList(){
    this.router.navigate(['/login'])
  }


}
