import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.loginForm = this.formBuilder.group({
      username:["",Validators.required],
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['',[Validators.required,Validators.email]],
      usertype:['',Validators.required]
    });
  }


  onSubmit(){
    console.log(this.loginForm.value);
  }
}
