import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { AuthenticationtestService } from './service/authenticationtest.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public loginService:AuthenticationService, public loginServicetest:AuthenticationtestService) { }

  ngOnInit() {
    
  }
  title = 'TaskManagement System';
}
