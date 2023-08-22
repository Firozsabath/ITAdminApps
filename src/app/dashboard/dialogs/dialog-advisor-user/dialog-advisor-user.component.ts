import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { tbl_user_foradvisorupdate } from 'src/app/Models/tbl_user_foradvisorupdate';
import { AdvisoropService } from 'src/app/service/advisor/advisorop.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';

@Component({
  selector: 'app-dialog-advisor-user',
  templateUrl: './dialog-advisor-user.component.html',
  styleUrls: ['./dialog-advisor-user.component.css']
})
export class DialogAdvisorUserComponent implements OnInit {
  advUser:FormGroup;
  data:tbl_user_foradvisorupdate;
  constructor(private fb:FormBuilder,private _snackBar:SnackBarService,private advService:AdvisoropService,@Inject(MAT_DIALOG_DATA) public dialoddata: any, private dialoref:MatDialogRef<DialogAdvisorUserComponent>) { 

   this.advUser = this.fb.group({
    ID:[0],
    Username:['',Validators.required],
    Datetime:[new Date]
   });
  }

  ngOnInit(): void {
    this.advUser.patchValue(this.dialoddata);
  }

  postUser(){
    debugger;
    if(this.advUser.valid){
      this.data = this.advUser.value;
      if(this.dialoddata){
          this.advService.updateAdvisorUser(this.data.ID,this.data).subscribe({
            next:(val:any)=>{
              this._snackBar.openSnackBar("Updated Successfully","ok")
              this.dialoref.close(true);
            }
          })
      }
      else{
        this.advService.addAdvisorUser(this.data).subscribe({
          next:(val:any)=>{
              this._snackBar.openSnackBar("Created Successfully","ok")
              this.dialoref.close(true);
          }
        });
      }
    }
    
    //console.log(this.data);

  }

}
