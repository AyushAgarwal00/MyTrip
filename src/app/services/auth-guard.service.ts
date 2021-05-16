import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue();
    console.log(currentUser);

    if (currentUser && JSON.stringify(currentUser) != '{}') {
      console.log('Auth Guard Success');
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
