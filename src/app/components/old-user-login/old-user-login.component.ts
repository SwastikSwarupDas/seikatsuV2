import { Component } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-old-user-login',
  templateUrl: './old-user-login.component.html',
  styleUrls: ['./old-user-login.component.scss']
})
export class OldUserLoginComponent {
  loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder, private apiService:ApiService){
    this.loginForm = this.formBuilder.group({
      username:["",Validators.required],
      password:['',[Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(){
    console.log("inside login onsubmit");
  }
}
