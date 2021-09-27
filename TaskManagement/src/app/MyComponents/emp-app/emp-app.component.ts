import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { AuthenticationtestService } from 'src/app/service/authenticationtest.service';
@Component({
  selector: 'app-emp-app',
  templateUrl: './emp-app.component.html',
  styleUrls: ['./emp-app.component.css']
})
export class EmpAppComponent implements OnInit {

  constructor(public loginService:AuthenticationService, public loginServicetest:AuthenticationtestService) { }

  ngOnInit(): void {

    document.write()
  }

}
