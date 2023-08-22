import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogModel } from 'src/app/Models/ConfirmDialog';
import { tbl_user_foradvisorupdate } from 'src/app/Models/tbl_user_foradvisorupdate';
import { AdvisoropService } from 'src/app/service/advisor/advisorop.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';
import { DialogAdvisorUserComponent } from '../dialogs/dialog-advisor-user/dialog-advisor-user.component';
import { DialogConfirmBoxComponent } from '../dialogs/dialog-confirm-box/dialog-confirm-box.component';

@Component({
  selector: 'app-advisor-todo',
  templateUrl: './advisor-todo.component.html',
  styleUrls: ['./advisor-todo.component.css']
})
export class AdvisorTodoComponent implements OnInit {
  displayedColumns: string[] = ['ID','Username','Datetime','Actions'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) msort: MatSort;
  constructor(private advOP:AdvisoropService,private _snackBar:SnackBarService, public dialog:MatDialog) {     
    this.getUsers();
  }

  ngOnInit(): void {
  }

  getUsers(){    
    this.advOP.getAdvisorUers().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.msort;
      //console.log(this.dataSource);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.msort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(){
    let dialogref = this.dialog.open(DialogAdvisorUserComponent,{width:"25vw"});

    dialogref.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getUsers();
        }
      },
      error:(err)=>{}
    });

  }

  editUser(data_adv:any){
    let dialogrf = this.dialog.open(DialogAdvisorUserComponent,{width:"25vw",data:data_adv});
    
    dialogrf.afterClosed().subscribe({      
       next:(val)=>{        
        if(val){          
          this.getUsers();
        }
       },
       error:(err)=>{}
      
    });
  }

  deleteUSer(id:number){

    const message = `Are you sure you want to delete the user?`;
    var dialogData = new ConfirmDialogModel("Confirm Action",message);
    let diRef = this.dialog.open(DialogConfirmBoxComponent,{width:"25vw",data:dialogData})

    diRef.afterClosed().subscribe(diResult=>{
      console.log(diResult);
      if(diResult){
        this.advOP.deleteAdvisorUser(id).subscribe({
          next:(val:any)=>{
            this._snackBar.openSnackBar("Deleted Successfully","ok")
            this.getUsers();
          }
        })
      }
    })
    
  }

}
