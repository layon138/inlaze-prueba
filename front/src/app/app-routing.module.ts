import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MainPageComponent } from './main/main-page/main-page.component';

const routes: Routes = [
  /*{
    path:'',
     loadChildren: () => import('../app/auth/auth.module').then((m) => m.AuthModule),
  },*/
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
    component:MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
