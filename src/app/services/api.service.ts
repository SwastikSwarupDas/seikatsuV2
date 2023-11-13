import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PasswordHashService } from './password-hash.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  password        : string='';
  hashedPassword  : string='';

  constructor(private database : HttpClient, private passwordHashService: PasswordHashService) { }

  addUser(userdata:any){
      const hashedPassword = this.passwordHashService.hashPassword(userdata.password);
      userdata.password=hashedPassword;

      return this.database.post('https://localhost:7122/api/Users', userdata);
  }

}
