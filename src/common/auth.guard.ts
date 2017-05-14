import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthGuard implements CanActivate {
  jwt:string;
  constructor(private router: Router) {}

  canActivate() {
    this.jwt = localStorage.getItem('id_token');
    if (this.jwt != null) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
