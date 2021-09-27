import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationtestService } from '../service/authenticationtest.service';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logintest',
  templateUrl: './logintest.component.html',
  styleUrls: ['./logintest.component.css']
})
export class LogintestComponent implements OnInit {
  user1!:Observable<User[]>
  username !:string
  password = ''
  invalidLogin = false
  test:Boolean=false
  r: any;
  constructor(private router: Router,
    private loginservice: AuthenticationtestService,private proService:UserService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    
       
    if (this.loginservice.authenticate(this.username, this.password,this.test)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else{
      this.invalidLogin = true
    }
  }

}
