import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user1!:Observable<User[]>
  test:Boolean=false
  arr: Array<User>=[]
  
  constructor(private proService:UserService) { }

  ngOnInit() {
    
    this.user1=this.proService.getProductList1();
    this.proService.getProductList1().subscribe(data=>this.arr=data)

    console.log(this.arr)
    
}

  authenticate(username:string, password: string,test:Boolean) {
    
    //console.log(user)
    //for(let val of user){
    //   if(username=== val.userId && password===val.password){
    //     sessionStorage.setItem('username', "javainuse")
    //     test=true
    //   }
    // }
    // return test
    //var r;
     this.proService.getProductList1().subscribe(clientData => {
        console.log(clientData)
       const r= Object.assign(new User(), clientData);
        
        const u=clientData.find((a: { userId: number; })=>{
          return a.userId===Number(username)
        })
        console.log(u.password)
        console.log(u.active)
        this.proService.updateProduct(u.id,u)
        if(password===u.password && u.role==="admin"){
          u.active=true;
          sessionStorage.setItem('username', "javainuse")
          this.test=true;
        }
     } )
     
    //  if(Number(username)===20247 && password==="12345"){
    //    sessionStorage.setItem('username', "javainuse")
    //   return true
    //  }else{
    //    return false
    //  }
    return this.test;
    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return (user === "javainuse")
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}