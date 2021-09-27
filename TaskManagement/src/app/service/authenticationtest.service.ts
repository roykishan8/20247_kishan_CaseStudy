import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationtestService {

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
   this.proService.getProductList1().subscribe(clientData => {
     const r= Object.assign(new User(), clientData);
      
      const u=clientData.find((a: { userId: number; })=>{
        return a.userId===Number(username)
      })
      console.log(u.password)
      console.log(u)
      if(password===u.password ){
        sessionStorage.setItem('username', "javainuse1")
        this.test=true;
      }
   } )
  return this.test;
  
}
isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
  console.log(!(user === null))
  return (user === "javainuse1")
}

logOut() {
  sessionStorage.removeItem('username')
}
}
