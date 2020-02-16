import { UserService } from './user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
UserService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLogged : boolean;
  constructor(
    private _router : Router,
    private _userService : UserService
    ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this._userService.isUserExists()){
      return true;
    }else{
      this._router.navigate(['login'])
      return false;
    }
    
  }
}
