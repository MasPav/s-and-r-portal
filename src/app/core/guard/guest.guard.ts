import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class GuestGuard implements CanActivate {
  constructor(private router: Router, private location: Location) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(localStorage.getItem('isLoggedin')) {
      this.location.back();
      return false;
    }
    return true;
  }
}
