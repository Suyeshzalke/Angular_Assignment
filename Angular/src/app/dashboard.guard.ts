import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private router :Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var isLogin = localStorage.getItem('isLoggedIn') === 'true' ? true : false;
      console.log(typeof(localStorage.getItem('isLoggedIn')))

      if (!isLogin) {
        
        this.router.navigate(['/home']);
      }
      return isLogin;
  }
  
}
