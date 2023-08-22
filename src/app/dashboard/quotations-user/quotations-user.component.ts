import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogModel } from 'src/app/Models/ConfirmDialog';
import { QuotationsUsersService } from 'src/app/service/Quotations/quotations-users.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';
import { DialogConfirmBoxComponent } from '../dialogs/dialog-confirm-box/dialog-confirm-box.component';
import { DialogQuotationsUserComponent } from '../dialogs/dialog-quotations-user/dialog-quotations-user.component';

@Component({
  selector: 'app-quotations-user',
  templateUrl: './quotations-user.component.html',
  styleUrls: ['./quotations-user.component.css']
})
export class QuotationsUserComponent implements OnInit {

  displayedColumns: string[] = ['ID','Username','DateLogged','Status','Actions'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) msort: MatSort; 
  constructor(private quotationsOp:QuotationsUsersService, private refDialog: MatDialog, private _snackbar: SnackBarService) {
    this.getUsers();
   }

  ngOnInit(): void {

  }

  addUsers(){
    let dialogRef = this.refDialog.open(DialogQuotationsUserComponent,{width:"30vw"});

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getUsers();
        }
      },
      error:(err)=>{}
    })
  }

  getUsers(){
      this.quotationsOp.getQuotationsUsers().subscribe((data:any)=>{
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort =this.msort;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUSer(id:number){
    const message = `Are you sure you want to delete the user?`;
    var dialogData = new ConfirmDialogModel("Confirm Action",message);
    let diRef = this.refDialog.open(DialogConfirmBoxComponent,{width:"25vw",data:dialogData})

    diRef.afterClosed().subscribe(diResult=>{
      console.log(diResult);
      if(diResult){
        this.quotationsOp.deleteQuotationsUsers(id).subscribe({
          next:(val:any)=>{
            this._snackbar.openSnackBar("Deleted Successfully","ok")
            this.getUsers();
          }
        })
      }
    })
     
  }

  editUser(data:any){
    //debugger; 
    let dialogRef = this.refDialog.open(DialogQuotationsUserComponent,{width:"30vw",data:data});

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getUsers();
        }
      },
      error:(err)=>{}
    })
  }

}
