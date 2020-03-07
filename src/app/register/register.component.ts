import { RegisterService } from './../register.service';
import { User } from './../user';
import { FormBuilder, FormGroup, FormControl ,Validators, Form} from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


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
    private _fb: FormBuilder,
    private _registerService : RegisterService
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
      // this.userExists = this.user.indexOf(value) === -1 ?  false : true;
     
      /*let result = this.user.find( user => user.username === value + this.domainname );
      this.userExists = result ? true : false*/

      this.userExists = false;
    }
  }


  onSubmit():void{
     let controls = this.registerForm.controls;

     let name = controls.name.value;
     let username = controls.username.value;
     let password = controls.password.value;

     let newuser:User = {
          "name" : name,
          "username" : username + this.domainname,
          "password" : password
      }
    
     this._registerService.addUser(newuser).subscribe(x => {
       console.log(x)
     })
  }
}
