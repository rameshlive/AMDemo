import { async } from '@angular/core/testing';
import { UserService } from './user/user.service';
import { Component, Inject,ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import {  Observable, observable } from 'rxjs';
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
  observable: Observable<number>;
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

     this.observable = Observable.create(observer => {
      let value = 0
      const interval = setInterval(() => {
        observer.next(value)
        value++
      }, 1000)

      return () => clearInterval(interval)
    })
  
  }

  get f() { return this.loginForm.controls; }

  openSnackbar(){
   
    const snackBarRef = this._snackBar.open('Successfully Logged In' ,'Close',{
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
     console.log(this.loginForm)
     return;
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
