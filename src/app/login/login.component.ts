import { TimerComponent } from '../timer/timer.component';
import { Component,OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
Router

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
  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private _router:Router
    ){ 
  }
  ngOnInit(): void {
      this.loginForm =  this.formBuilder.group({
        username : ['',Validators.required],
        password:['',[Validators.required, Validators.minLength(6)]]
      })
  }

  get f() { return this.loginForm.controls; }

  openSnackbar(){
    let snackBarRef = this._snackBar.openFromComponent(TimerComponent)
    this.snackbarSub = snackBarRef.afterDismissed().subscribe(x => {
      this._router.navigate(['dashboard'])
    })

  }
  eyeClicked(){
     this.hide = !this.hide;
     this.submitted = false;
     return;
  }
  onSubmit(){
    this.submitted = true;
    if(this.loginForm.valid){
      this.openSnackbar();
    }
  }
  ngOnDestroy(): void {
    //this.snackbarSub.unSubscribe();
  }

}
