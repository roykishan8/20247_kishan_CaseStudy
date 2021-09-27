import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationtestService } from './authenticationtest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardTestService {

  constructor(private router: Router,
    private authServicetest: AuthenticationtestService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.authServicetest.isUserLoggedIn())
        return true;
  
      this.router.navigate(['login']);
      return false;
  
    }
  }


