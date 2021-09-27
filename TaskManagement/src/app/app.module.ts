import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentService } from './MyComponentService';
import { MyOwnComponent } from './MyOwnComponent';
import { HttpClientModule} from '@angular/common/http';
import { EmployeeServiceComponent } from './MyComponents/employee-service/employee-service.component';
import { ProductListComponent } from './MyComponents/product-list/product-list.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ProductPostComponent } from './MyComponents/product-post/product-post.component';

import { MyModule } from './AdminModule/MyModule';
import { UpdateProductComponent } from './MyComponents/update-product/update-product.component';
import { UserListComponent } from './MyComponents/user-list/user-list.component';
import { UserUpdateComponent } from './MyComponents/user-update/user-update.component';
import { CustomerEmailFilter } from './testfilter';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserPostComponent } from './MyComponents/user-post/user-post.component';
import { LogintestComponent } from './logintest/logintest.component';
import { EmpAppComponent } from './MyComponents/emp-app/emp-app.component';
import { UsertestListComponent } from './MyComponents/usertest-list/usertest-list.component';
import { TasktestListComponent } from './MyComponents/tasktest-list/tasktest-list.component';
import { LogouttestComponent } from './logouttest/logouttest.component';
import { UpdatetestProductComponent } from './MyComponents/updatetest-product/updatetest-product.component';
import { UpdatesignupUserComponent } from './MyComponents/updatesignup-user/updatesignup-user.component';



@NgModule({
  declarations: [
    AppComponent,MyComponentService,MyOwnComponent, EmployeeServiceComponent, ProductListComponent, ProductPostComponent,
    
    UpdateProductComponent,
    UserListComponent,
    UserUpdateComponent,CustomerEmailFilter, LoginComponent, LogoutComponent, UserPostComponent, LogintestComponent, EmpAppComponent, UsertestListComponent, TasktestListComponent, LogouttestComponent, UpdatetestProductComponent, UpdatesignupUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,MyModule, Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
