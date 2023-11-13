import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated:boolean=false;
  private userType:string='';
  private authChangedSource: Subject<void> = new Subject<void>();

  constructor(private router:Router) { }

  loginSuccess(userType:string){
    this.isAuthenticated = true;
    this.userType = userType;
    this.authChangedSource.next();
    this.router.navigate(['']);
  }

  isAuthenticatedUser():boolean{
    return this.isAuthenticated;
  }

  getUserType():string{
    return this.userType;
  }

  logout(){
    this.isAuthenticated = false;
    this.userType = '';
    this.authChangedSource.next();
    this.router.navigate(['login'])
  }

  get authChanged():Observable<void>{
    return this.authChangedSource.asObservable();
  }

}
