import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RepublicGuard implements CanActivate  {

  constructor(private router: Router, public authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

      if (localStorage.getItem('token') === 'null') {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
  }
}
