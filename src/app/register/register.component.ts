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
  constructor(
    private _fb: FormBuilder
    ) { }

  ngOnInit() {

    this.registerForm =  this._fb.group({
      username : ['',Validators.required ],
      email : ['',Validators.required],
      password : ['',[Validators.required,Validators.minLength(6)]]
    })
  }

  get f() { return this.registerForm.controls; }

  togglePassword(){
    this.showPassword = !this.showPassword;
    console.log(this.showPassword)
  }

  onSubmit():void{
      
  }
}
