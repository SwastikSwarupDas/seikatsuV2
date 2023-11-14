import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject,Observable} from 'rxjs';
import { ApiService,user } from './api.service';
import {first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated:boolean=false;
  private username:string = '';
  private userType:string='';
  private authChangedSource: Subject<void> = new Subject<void>();

  constructor(private router:Router, private apiService:ApiService) { }

  loginSuccess(userType:string){
    this.apiService.user$.pipe(first()).subscribe((users:user[])=>{
      const latestUser = users[users.length-1];
      this.username = latestUser.username;
      this.userType = latestUser.usertype;
      this.authChangedSource.next();
      this.router.navigate(['']);
    });
  }

  isAuthenticatedUser():boolean{
    return this.isAuthenticated;
  }

  getUsername():string{
    return this.username;
  }

  getUserType():string{
    return this.userType;
  }

  logout(){
    this.isAuthenticated = false;
    this.userType = '';
    this.username = '';
    this.authChangedSource.next();
    this.router.navigate(['login'])
  }

  get authChanged():Observable<void>{
    return this.authChangedSource.asObservable();
  }

}
