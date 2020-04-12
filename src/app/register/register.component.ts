import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { LocalusersstorageService } from './../localusersstorage.service';
import { RegisterService } from './../register.service';
import { User } from './../user';
import { FormBuilder, FormGroup, FormControl ,Validators, Form} from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  showPassword : boolean = false;
  registerForm : FormGroup;
  userExists : boolean = false;
  domainname: string = '@amdemo.com';
  users: string[];
  user: User;
  constructor(
    private _registerSnackbar : MatSnackBar,
    private _fb: FormBuilder,
    private _registerService : RegisterService,
    private _router : Router,
    private _localusersstorageService : LocalusersstorageService

    ) {
          this.users = [ 'ramesh','yashi','mukil','yoga','balu','amma','appa'];
     }

  ngOnInit() {

    this.registerForm =  this._fb.group({
      name: ['',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
      username : ['',[Validators.required , Validators.minLength(3)]],
      password : ['',[Validators.required,Validators.minLength(6)]]
    })
  }

  get f() { return this.registerForm.controls; }

  togglePassword(){
    this.showPassword = !this.showPassword;
    console.log(this.showPassword)
  }

  /* Check username already Exists*/
  checkUsers(value:string){ 
    if(value.length >= 3){
       let usernames = this._localusersstorageService.getUsers();
       this.userExists = usernames.indexOf(value) === -1 ?  false : true;
    }
  }


  onSubmit():void{
     
     let controls = this.registerForm.controls;

     let name = controls.name.value;
     let username = controls.username.value;
     let password = controls.password.value;
    
     let newuserId = JSON.parse(localStorage.getItem('users'));
     newuserId = newuserId != null ? newuserId.length + 1 : 1;
     let newuser:User = {
          "id" :   newuserId,
          "name" : name,
          "username" : username + this.domainname,
          "password" : password
      }
     this._registerService.addUser(newuser);
     this._registerSnackbar.open("You have been succefully registered.Please wait redirecting you to login","Close",{
       duration: 5000,
       verticalPosition: 'bottom',
       panelClass: ['mat-toolbar', 'mat-accent']
     })
     this._registerSnackbar._openedSnackBarRef.afterDismissed().subscribe(x => {
        this._router.navigate(['login'])
     })
  }
}
