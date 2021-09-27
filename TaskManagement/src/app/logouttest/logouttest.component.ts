import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationtestService } from '../service/authenticationtest.service';

@Component({
  selector: 'app-logouttest',
  templateUrl: './logouttest.component.html',
  styleUrls: ['./logouttest.component.css']
})
export class LogouttestComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationtestService,
    private router: Router) {

  }

  ngOnInit() {
    this.authentocationService.logOut();
    this.router.navigate(['login']);
  }

}
