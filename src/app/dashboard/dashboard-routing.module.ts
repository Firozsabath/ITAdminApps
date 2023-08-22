import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/auth-guard.guard';
import { AdvisorTodoComponent } from './advisor-todo/advisor-todo.component';
import { AdvisorUserProgramsComponent } from './advisor-user-programs/advisor-user-programs.component';
import { CudadminAppUserComponent } from './cudadmin-app-user/cudadmin-app-user.component';
import { CustomAppDynamicsComponent } from './custom-app-dynamics/custom-app-dynamics.component';
import { DasboardCComponent } from './dasboard-c/dasboard-c.component';
import { DocumentsComponent } from './documents/documents.component';
import { QuotationsUserComponent } from './quotations-user/quotations-user.component';
import { StudStatusComponent } from './stud-status/stud-status.component';

const routes: Routes = [
  {
    path:'',
    component:DasboardCComponent,
    children:[
      {
        path:'auth',
        component:DasboardCComponent,
      }
  ]
  },
  {
    path:'Studstatus',
    component:StudStatusComponent
  },
  {
    path:'Quoations',
    component:QuotationsUserComponent
  },
  {
    path:'advisor',
    component:AdvisorTodoComponent
  },
  {
    path:'advisorProgs',
    component:AdvisorUserProgramsComponent
  },
  {
    path:'adminAppsUsers',
    component:CudadminAppUserComponent
  },
  {
    path:'Appstatics',
    component:CustomAppDynamicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
