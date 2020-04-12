import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { TimerComponent } from '../timer/timer.component';
import { Component,OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
Observable
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPage : boolean = false;
  loginForm : FormGroup;
  hide:boolean = true;
  submitted:boolean = false;
  snackbarSub : any;
  username:string;
  password:string;
  errorMsg : string;
  loggedInUser : boolean = false;
  
  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private _router:Router,
    private _userService : UserService,
    private _spinner: NgxSpinnerService,
    private db:AngularFireDatabase,
    
    ){ 
      
  }
  ngOnInit(): void {

    /* Loading Indicator for Login Component */
    this._spinner.show();
    setTimeout(() => {
      this._spinner.hide();
      this.showPage = true;
    }, 3000);
      
    /* Set validation */
    this.loginForm =  this.formBuilder.group({
      username : ['',Validators.required],
      password:['',[Validators.required, Validators.minLength(6)]]
    })

    /*Check user exists*/
    const isUserExists = this._userService.isUserExists();
    if(isUserExists){
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
        this._userService.login(this.username,this.password);
        /*Check user exists*/
        const isUserExists = this._userService.isUserExists();
        if(isUserExists){
          this.errorMsg = "";
          this.openSnackbar();
        }else{
            this.errorMsg = "Invalid Credentials";
        }
      }
  }
  ngOnDestroy(): void {
    //this.snackbarSub.unSubscribe();
  }

}