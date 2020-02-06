import { UserService } from './user/user.service';
import { Component, Inject,ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import {  Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,OnDestroy{
  loginForm : FormGroup;
  hide:boolean = true;
  submitted:boolean = false;
  rTimer: number = 6;
  obs$:Observable<any>;
  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private _userService : UserService
    ){ 
  }
  ngOnInit(): void {
      this.loginForm =  this.formBuilder.group({
        username : ['',Validators.required],
        password:['',[Validators.required, Validators.minLength(6)]]
      })
      this.obs$ =new Observable(observer =>{
        setTimeout(() => {
          observer.next(1)
        }, 1000);
        setTimeout(() => {
         observer.next(2)
       }, 2000);
       setTimeout(() => {
         observer.next(3)
       }, 3000);
       setTimeout(() => {
         observer.next(4)
       }, 4000);
       setTimeout(() => {
         observer.next(5)
       }, 5000);
     })
  }

  get f() { return this.loginForm.controls; }

  openSnackbar(){
   
    const snackBarRef = this._snackBar.open('Successfully Logged In' + this.rTimer,'Close',{
      duration: 5000
    })
      //const numbersObs$ = this._userService.getResults();
      this.obs$.subscribe(
        (x:number) =>{
          this.rTimer = x;console.log(x)
        } ,
        (err:string) => console.error('Observer got an error: ' + err),
        () => console.log('Observer got a complete notification')
      )
  }

  eyeClicked(){
    this.hide = !this.hide;
    this.submitted = false;
  }

  onSubmit(){
   
    
    this.submitted = true;
    if(this.loginForm.valid){
     
      this.openSnackbar();
    }
  }
  ngOnDestroy(): void {
  }
}
