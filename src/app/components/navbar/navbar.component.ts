import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  username: string = '';
  userType : string = '';
  private authSubscription: Subscription | undefined;

  constructor(private authService:AuthService){

  }

  ngOnInit(){
    this.authSubscription = this.authService.authChanged.subscribe(()=>{
      this.isAuthenticated = this.authService.isAuthenticatedUser();
      this.username = this.authService.getUsername();
      this.userType = this.authService.getUserType();
    });
  }

  ngOnDestroy(){
    if(this.authSubscription){
      this.authSubscription.unsubscribe();
    }
  }

  logout(){
    this.authService.logout();
  }
}
