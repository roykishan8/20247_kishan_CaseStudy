import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AuthenticationtestService } from './authenticationtest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router,
    private authService: AuthenticationService,private authServicetest: AuthenticationtestService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;

  }
  canActivateTest(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authServicetest.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;

  }



}