import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user1!:Observable<User[]>
  
   arr!: Array<User>
  


  username !:string
  password = ''
  invalidLogin = false
  test:Boolean=false
  r: any;
  
  constructor(private router: Router,
    private loginservice: AuthenticationService,private proService:UserService) { }

  ngOnInit() {
    
      this.user1=this.proService.getProductList1();
      // this.proService.getProductList1().subscribe(data=>this.arr=data)
      // console.log(this.arr)
      this.proService.getProductList1().subscribe(clientData => {
  
        // Here the client data from API only have the "name" field
        // If we want to use the Client class methods on this data object we need to:
       // const u=clientData.find()
        const r=clientData.find((a:any)=>{
          return a.username
        })
        const t=clientData;
      
       // console.log(t[3])
         let clientWithType = Object.assign(new User(), clientData)
      
        console.log(clientWithType[0].role)
        console.log(clientWithType.getPassword())
      })
      
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

function r(r: any): ((error: any) => void) | null | undefined {
  throw new Error('Function not implemented.');
}
