import { AlertpopupComponent } from './alertpopup/alertpopup.component';
import { UserService } from './user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { MatDialog ,MatDialogRef} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLogged : boolean;
  constructor(
    private _router : Router,
    private _userService : UserService,
    private _alertPopup : MatDialog
    ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this._userService.isLoggedIn){
      return true;
    }else{
      let alertDialogRef = this._alertPopup.open(AlertpopupComponent);
      return false;
    }
    
  }
}
