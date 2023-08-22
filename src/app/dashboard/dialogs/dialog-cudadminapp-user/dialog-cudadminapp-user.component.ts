import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminAppUsers } from 'src/app/Models/AdminAppUser';
import { CudadminappUsersService } from 'src/app/service/cudadminapp/cudadminapp-users.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-dialog-cudadminapp-user',
  templateUrl: './dialog-cudadminapp-user.component.html',
  styleUrls: ['./dialog-cudadminapp-user.component.css']
})
export class DialogCudadminappUserComponent implements OnInit {
  adminUser:FormGroup;
  roleSelectedValue:any
  roles:any
  adminUserData:AdminAppUsers;
  constructor(private fb:FormBuilder, @Inject(MAT_DIALOG_DATA) public inData:any, private adminServices:CudadminappUsersService, private _snackbar:SnackBarService, private dialogRef:MatDialogRef<DialogCudadminappUserComponent>) {
    this.adminUser = this.fb.group({
      ID:[0],
      Username:["",Validators.required],
      DateCreated:[new Date],
      Role:["",Validators.required]   
    });
   }

  ngOnInit(): void {
    this.roles = ["Admin","Finance","Admission"];
    this.roleSelectedValue = this.inData.Role;
    this.adminUser.patchValue(this.inData);
  }

  postUser(){
    if(this.adminUser.valid){
      this.adminUserData = this.adminUser.value;
      if(this.inData){
        this.adminServices.updateadminAppUser(this.adminUserData.ID,this.adminUserData).subscribe({
          next:(val:any)=>{
              this._snackbar.openSnackBar("Updated Successfully","Ok");
              this.dialogRef.close(true);
          }
      });        
      }
      else{
        this.adminServices.addadminAppUsers(this.adminUserData).subscribe({
          next:(val:any)=>{
              this._snackbar.openSnackBar("Created Successfully","Ok");
              this.dialogRef.close(true);
          }
        });
      }
    }
  }

}
