import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogModel } from 'src/app/Models/ConfirmDialog';
import { CudadminappUsersService } from 'src/app/service/cudadminapp/cudadminapp-users.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';
import { DialogConfirmBoxComponent } from '../dialogs/dialog-confirm-box/dialog-confirm-box.component';
import { DialogCudadminappUserComponent } from '../dialogs/dialog-cudadminapp-user/dialog-cudadminapp-user.component';

@Component({
  selector: 'app-cudadmin-app-user',
  templateUrl: './cudadmin-app-user.component.html',
  styleUrls: ['./cudadmin-app-user.component.css']
})
export class CudadminAppUserComponent implements OnInit {
  displayedColumns: String[] = ['ID','Username','DateCreated','Role','Actions'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private adminApppUsers:CudadminappUsersService,private _dialogRef:MatDialog, private _snackBar:SnackBarService) {
    this.getUsers();
   }

  ngOnInit(): void {
    //this.getUsers();
  }

  getUsers(){
    this.adminApppUsers.getadminAppUsers().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  addUser(){
    let dialog = this._dialogRef.open(DialogCudadminappUserComponent,{width:"30vw"});

    dialog.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getUsers();
        }
      },
      error:(val)=>{}
    })    
  }

  editUser(data:any){
    let dialog = this._dialogRef.open(DialogCudadminappUserComponent,{width:"30vw", data:data});

    dialog.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getUsers();
        }
      },
      error:(val)=>{}
    })    
  }

  deleteUSer(id:number){
    const message = `Are you sure you want to delete the user?`;
    var dialogData = new ConfirmDialogModel("Confirm Action",message);
    let diRef = this._dialogRef.open(DialogConfirmBoxComponent,{width:"25vw",data:dialogData})

    diRef.afterClosed().subscribe(diResult=>{
      console.log(diResult);
      if(diResult){
        this.adminApppUsers.deleteadminAppUsers(id).subscribe({
          next:(val:any)=>{
            this._snackBar.openSnackBar("Deleted Successfully","ok")
            this.getUsers();
          }
        })
      }
    })
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }

  }

}
