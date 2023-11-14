import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject,Observable} from 'rxjs';
import { ApiService,user } from './api.service';
import {first, withLatestFrom } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject :BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private usernameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private userTypeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private userIdSubject : BehaviorSubject<string> = new BehaviorSubject<string>('');
  private userEmailSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  // private authChangedSource: Subject<void> = new Subject<void>();

  constructor(private router:Router, private apiService:ApiService) { }

  loginSuccess(userType:string){
    console.log(this.isAuthenticatedSubject + " beforethe apiservice call")
    this.apiService.user$.pipe(first()).subscribe((users:user[])=>{
      const latestUser = users[users.length-1];
      this.isAuthenticatedSubject.next(true);
      this.usernameSubject.next(latestUser.username);
      this.userTypeSubject.next(latestUser.usertype);
      this.userIdSubject.next(latestUser._id);
      this.router.navigate(['']);
    });
    console.log(this.isAuthenticatedSubject + "after balle balle")
  }

  isAuthenticatedUser(): Observable<boolean>{
    return this.isAuthenticatedSubject.asObservable();
  }

  getUsername():Observable<string>{
    return this.usernameSubject.asObservable();
  }
  
  getUserType():Observable<string>{
    return this.userTypeSubject.asObservable();
  }

  logout(){
    this.isAuthenticatedSubject.next(false);
    this.userTypeSubject.next('');
    this.usernameSubject.next('');
    this.router.navigate(['login'])
  }

}
