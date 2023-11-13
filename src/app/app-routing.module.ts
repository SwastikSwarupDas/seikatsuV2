import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MapComponent } from './components/map/map.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { OldUserLoginComponent } from './components/old-user-login/old-user-login.component';

const routes: Routes = [
  {
    path:"",component:HomepageComponent
  },
  {
    path:"map",component:MapComponent
  },
  {
    path:"register",component:LoginPageComponent
  },
  {
    path:"login",component:OldUserLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
