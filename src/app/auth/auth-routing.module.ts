import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/auth-guard.guard';
import { AdminsScreenComponent } from './admins-screen/admins-screen.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    children:[
      {
        path:'auth',
        component:LoginComponent
      }
  ]
  },
  {
    path:'admin',
    component:AdminsScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
