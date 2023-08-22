import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/auth-guard.guard';
import { DasboardCComponent } from './dashboard/dasboard-c/dasboard-c.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';

const routes: Routes = [

  //auth Routes then
  {
    path:'',
    component:AuthLayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'/auth',
        pathMatch:'full'
      },
      {
        path:'auth',
        loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  },

  //App Routes first
  {
    path:'',
    component:DashboardLayoutComponent,canActivate:[AuthGuardGuard],
    children:[
      {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
      },
      {
        path:'dashboard',
        loadChildren:()=> import('./dashboard/dashboard.module').then(module => module.DashboardModule)
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
