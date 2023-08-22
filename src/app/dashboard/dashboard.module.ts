import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DasboardCComponent } from './dasboard-c/dasboard-c.component';
import { StudStatusComponent } from './stud-status/stud-status.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { DocumentsComponent } from './documents/documents.component';
import { AdvisorTodoComponent } from './advisor-todo/advisor-todo.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogAdvisorUserComponent } from './dialogs/dialog-advisor-user/dialog-advisor-user.component';
import { DialogConfirmBoxComponent } from './dialogs/dialog-confirm-box/dialog-confirm-box.component';
import { AdvisorUserProgramsComponent } from './advisor-user-programs/advisor-user-programs.component';
import {MatSelectModule} from '@angular/material/select';
import { DialogAdvisorUserProgramComponent } from './dialogs/dialog-advisor-user-program/dialog-advisor-user-program.component';
import { QuotationsUserComponent } from './quotations-user/quotations-user.component';
import { DialogQuotationsUserComponent } from './dialogs/dialog-quotations-user/dialog-quotations-user.component';
import { CudadminAppUserComponent } from './cudadmin-app-user/cudadmin-app-user.component';
import { DialogCudadminappUserComponent } from './dialogs/dialog-cudadminapp-user/dialog-cudadminapp-user.component';
import { CustomAppDynamicsComponent } from './custom-app-dynamics/custom-app-dynamics.component';
@NgModule({
  declarations: [
    DasboardCComponent,
    StudStatusComponent,
    SearchFilterComponent,
    DocumentsComponent,
    AdvisorTodoComponent,
    DialogAdvisorUserComponent,
    DialogConfirmBoxComponent,
    AdvisorUserProgramsComponent,
    DialogAdvisorUserProgramComponent,
    QuotationsUserComponent,
    DialogQuotationsUserComponent,
    CudadminAppUserComponent,
    DialogCudadminappUserComponent,
    CustomAppDynamicsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports:[
    SearchFilterComponent
  ]
})
export class DashboardModule { }
