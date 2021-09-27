import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  user: User=new User()
  submitted:boolean=false;

  constructor(private proService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  newProduct():void{
    this.submitted=false;
    this.user=new User();
  }
  addSave(){
    this.proService.create(this.user).subscribe((data: any)=>console.log(data));
    this.user=new User();
    this.gotoList();


  }
  onSubmit(){
    this.submitted=true;
    this.addSave()
    

  }
  gotoList(){
    this.router.navigate(['/user'])
  }

}
