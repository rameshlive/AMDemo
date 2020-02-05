import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,OnDestroy{
  title = 'Angular Material Project Demo';
  loginForm : FormGroup;
  hide:boolean = true;
  submitted:boolean = false;
  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder
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
      this._snackBar.open('Submitted Succesfully','Close',{
        duration:2000
      })
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
