import { RoutereventsService } from './../services/shared/routerevents.service';
import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { TimerComponent } from '../timer/timer.component';
import { Component,OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
Observable
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  hide:boolean = true;
  submitted:boolean = false;
  snackbarSub : any;
  username:string;
  password:string;
  errorMsg : string;
  loggedInUser : boolean = false;
  showPage :boolean = true;
  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private _routereventsService : RoutereventsService,
    private _router:Router,
    private _userService : UserService,
    private _spinner: NgxSpinnerService
    
    ){ 
      
  }
  ngOnInit(): void {

    /*get Previous url*/
    let previousUrl =  this._routereventsService.getPreviousUrl();
    
    if(previousUrl == '/'){
        /* Loading Indicator for Login Component */
        this._spinner.show();
        setTimeout(() => {
            this._spinner.hide();
            this.showPage = true;
        }, 3000);
    }

    this.showPage = true; 

    /* Set validation */
    this.loginForm =  this.formBuilder.group({
      username : ['',Validators.required],
      password:['',[Validators.required, Validators.minLength(6)]]
    })



    /*Check user exists*/
    const isLoggedIn = this._userService.isLoggedIn;
    if(isLoggedIn){
        this.loggedInUser = true;
        this._router.navigate(['dashboard'])
    }
  }
  
  get f() { return this.loginForm.controls; }

  openSnackbar(){
    let snackBarRef = this._snackBar.openFromComponent(TimerComponent,{
      panelClass: ['mat-toolbar', 'mat-primary']
    })
    snackBarRef.afterDismissed().subscribe(x => {
      this._router.navigate(['dashboard'])
    })
  }

  
  togglePasswordIcon(){
     this.hide = !this.hide;
  }

  onSubmit(){
      this.submitted = true;
      this.username = this.loginForm.value.username;
      this.password = this.loginForm.value.password;
      if(this.loginForm.valid){
        let loggedUer = this._userService.login(this.username,this.password);
        /*Check user exists*/
        //const isLoggedIn = this._userService.loggedIn();
        if(loggedUer){
          this.errorMsg = "";
          //this.openSnackbar();
          this._router.navigate(['dashboard']);
        }else{
            this.errorMsg = "Invalid Username or Password ";
        }
      }
  }
  ngOnDestroy(): void {
    //this.snackbarSub.unSubscribe();
  }

}
