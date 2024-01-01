import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { authenticationGuard } from './main/guards/guards';
import { MainPageComponent } from './main/main-page/main-page.component';

const routes: Routes = [
  {
    path:'*',
    redirectTo:'auth/login',
    
  },
  {
    path:'auth',
   children:[
    {
      path:'login',
     component:LoginComponent
    },
    {
      path:'register',
     component:RegisterComponent
    }
   ]
  },
  {
    path:'main',
    component:MainPageComponent,
    canActivate: [authenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
