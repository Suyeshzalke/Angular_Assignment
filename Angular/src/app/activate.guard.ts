import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from './service/user.service';

@Injectable({
  providedIn: 'root',
})
export class ActivateGuard implements CanActivate {
  constructor(private router:Router,
    private userservice:CrudService){}
  canActivate() {
    if(this.userservice.IsLog()){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}


