import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Advisor_AdminProgrammes, Programs } from 'src/app/Models/Advisor_AdminProgrammes';
import { AdvisorprogramService } from 'src/app/service/advisor/advisorprogram.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';
import { AdvisorUserProgramsComponent } from '../../advisor-user-programs/advisor-user-programs.component';

@Component({
  selector: 'app-dialog-advisor-user-program',
  templateUrl: './dialog-advisor-user-program.component.html',
  styleUrls: ['./dialog-advisor-user-program.component.css']
})
export class DialogAdvisorUserProgramComponent implements OnInit {
  userProgram: FormGroup;
  proList:any;
  progSelectedValue = Programs[0];
  constructor(private fb:FormBuilder, private advUserProgs: AdvisorprogramService,@Inject(MAT_DIALOG_DATA) public dialogdata: any, private _snackbar:SnackBarService, private dialogRef: MatDialogRef<DialogAdvisorUserProgramComponent>) {

    this.userProgram = this.fb.group({
      ID:[],
      AdminName:["",Validators.required],
      Programs:["",Validators.required],
      PragramsID:["",Validators.required]
    });

   }
  
  ngOnInit(): void {
    
    this.advUserProgs.getAllPrograms().subscribe((data:any)=>{
      this.proList = data;
    });
    console.log(this.dialogdata);
    this.userProgram.patchValue(this.dialogdata);
  }

  postUserProgram(){      
      var selectProg = this.progSelectedValue.programName;
      var selectProgID = this.progSelectedValue.programID;
      var postData: Advisor_AdminProgrammes = {AdminName: this.userProgram.value.AdminName, ID: 0, Programs: selectProg, PragramsID: selectProgID}
      this.advUserProgs.addAdvisorProgram(postData).subscribe({
          next:(val:any)=>{
            this._snackbar.openSnackBar("Created Successfully","Ok")
            this.dialogRef.close(true);
          }
      })
      //console.log(postData);
  }

}
