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

    this.authService.auth().subscribe( (res) => {
      console.log(res.status);
      console.log(res.user);
      if (res.status !== 200) {
        this.router.navigate(['/login']);
        return false;
      }
    });

    return true;
  }
}
