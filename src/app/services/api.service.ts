import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PasswordHashService } from './password-hash.service';
import { Observable } from 'rxjs';

export interface user {
  _id: string;
  username: string;
  password: string;
  email: string;
  usertype: string;
  propertyIds: string[];
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  user$!:Observable<user[]>;

  password        : string='';
  hashedPassword  : string='';

  constructor(private database : HttpClient, private passwordHashService: PasswordHashService) { }

  addUser(userdata:any){
      const hashedPassword = this.passwordHashService.hashPassword(userdata.password);
      userdata.password=hashedPassword;

      return this.database.post('https://localhost:7122/api/Users', userdata);
  }

  getAllUsers():Observable<user[]>{
    this.user$ = this.database.get<user[]>('https://localhost:7122/api/Users');
    return this.user$;
  }

  comparePasswords(enteredPassword:string,hashedPassword:string):boolean{
    const hashedEnteredPassword = this.passwordHashService.hashPassword(enteredPassword);
    return hashedEnteredPassword === hashedPassword;
  }

}
