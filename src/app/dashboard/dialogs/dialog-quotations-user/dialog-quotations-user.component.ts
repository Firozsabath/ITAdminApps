import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tbl_QuotationUsers } from 'src/app/Models/Tbl_QuotationUsers';
import { QuotationsUsersService } from 'src/app/service/Quotations/quotations-users.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-dialog-quotations-user',
  templateUrl: './dialog-quotations-user.component.html',
  styleUrls: ['./dialog-quotations-user.component.css']
})
export class DialogQuotationsUserComponent implements OnInit {
  quotUser:FormGroup;
  roleSelectedValue:any;
  roles: string[] = [];
  quotUserData:Tbl_QuotationUsers;
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public dialogData: any, private quotService:QuotationsUsersService, private _snackbar:SnackBarService, private dialogRef:MatDialogRef<DialogQuotationsUserComponent>) { 
    this.quotUser = this.fb.group({
      ID:[0],
      Username:["",Validators.required],
      DateLogged:[new Date],
      Status:["",Validators.required]    
    });
  }
  
  ngOnInit(): void {
    this.roles = ["Admin","User"];
    this.roleSelectedValue = this.dialogData.Status;
    this.quotUser.patchValue(this.dialogData);    
  }

  postUser(){
    debugger;
    //console.log(this.quotUser.value);
    if(this.quotUser.valid){
      this.quotUserData = this.quotUser.value;
      if(this.dialogData){
        this.quotService.updateQuotUser(this.quotUserData.ID,this.quotUserData).subscribe({
          next:(val:any)=>{
              this._snackbar.openSnackBar("Updated Successfully","Ok");
              this.dialogRef.close(true);
          }
      });        
      }
      else{
        this.quotService.addQuotationsUsers(this.quotUserData).subscribe({
          next:(val:any)=>{
              this._snackbar.openSnackBar("Created Successfully","Ok");
              this.dialogRef.close(true);
          }
        });
      }
    }
  }

}
