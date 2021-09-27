import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogintestComponent } from './logintest/logintest.component';
import { LogoutComponent } from './logout/logout.component';
import { LogouttestComponent } from './logouttest/logouttest.component';
import { EmpAppComponent } from './MyComponents/emp-app/emp-app.component';

import { ProductListComponent } from './MyComponents/product-list/product-list.component';
import { ProductPostComponent } from './MyComponents/product-post/product-post.component';
import { TasktestListComponent } from './MyComponents/tasktest-list/tasktest-list.component';
import { UpdateProductComponent } from './MyComponents/update-product/update-product.component';
import { UpdatesignupUserComponent } from './MyComponents/updatesignup-user/updatesignup-user.component';
import { UpdatetestProductComponent } from './MyComponents/updatetest-product/updatetest-product.component';
import { UserListComponent } from './MyComponents/user-list/user-list.component';
import { UserPostComponent } from './MyComponents/user-post/user-post.component';
import { UserUpdateComponent } from './MyComponents/user-update/user-update.component';
import { UsertestListComponent } from './MyComponents/usertest-list/usertest-list.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { AuthGuardTestService } from './service/auth-guard-test.service';


const routes: Routes = [
  
  
  {path : 'ShowProducts', component: ProductListComponent},
  {path : 'AddProducts', component: ProductPostComponent},

  //{path:'',redirectTo:'product',pathMatch:'full'},
  {path: 'tasks',component:ProductListComponent,canActivate:[AuthGaurdService]},
  {path: 'tasks1',component:TasktestListComponent,canActivate:[AuthGuardTestService]},
  {path: 'emp',component:EmpAppComponent,canActivate:[AuthGuardTestService]},
  {path: 'save',component:ProductPostComponent,canActivate:[AuthGaurdService]},
  {path: 'saveuser',component:UserPostComponent,canActivate:[AuthGaurdService]},
  {path: 'user', component:UserListComponent,canActivate:[AuthGaurdService]},
  {path: 'user1', component:UsertestListComponent,canActivate:[AuthGuardTestService]},
  {path: 'details/:id',component:ProductListComponent,canActivate:[AuthGaurdService]},
  {path: 'details1/:id',component:UserListComponent,canActivate:[AuthGaurdService]},
  {path: 'update/:id',component:UpdateProductComponent,canActivate:[AuthGaurdService]},
  {path: 'update1/:id',component:UpdatetestProductComponent,canActivate:[AuthGuardTestService]},
  {path: 'update2/:id',component:UserUpdateComponent,canActivate:[AuthGaurdService]},
  {path: 'login',component:LoginComponent},
  {path: 'loginemp',component:LogintestComponent},
  {path: 'logout', component:LogoutComponent,canActivate:[AuthGaurdService]},
  {path: 'logout1', component:LogouttestComponent,canActivate:[AuthGuardTestService]},
  {path: 'signup',component:UpdatesignupUserComponent}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
