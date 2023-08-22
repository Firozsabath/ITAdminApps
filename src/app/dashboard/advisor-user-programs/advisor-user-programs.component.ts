import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Advisor_AdminProgrammes } from 'src/app/Models/Advisor_AdminProgrammes';
import { ConfirmDialogModel } from 'src/app/Models/ConfirmDialog';
import { AdvisoropService } from 'src/app/service/advisor/advisorop.service';
import { AdvisorprogramService } from 'src/app/service/advisor/advisorprogram.service';
import { SnackBarService } from 'src/app/service/snack-bar.service';
import { DialogAdvisorUserProgramComponent } from '../dialogs/dialog-advisor-user-program/dialog-advisor-user-program.component';
import { DialogConfirmBoxComponent } from '../dialogs/dialog-confirm-box/dialog-confirm-box.component';

@Component({
  selector: 'app-advisor-user-programs',
  templateUrl: './advisor-user-programs.component.html',
  styleUrls: ['./advisor-user-programs.component.css']
})
export class AdvisorUserProgramsComponent implements OnInit {
  admFieldForm:FormGroup;
  selectedValue: any;
  adminsList:any;
  progList:any;
  displayedColumns: string[] = ['ID','Programs','User','Actions'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) msort: MatSort;
  visible:boolean = false
  constructor(private fb: FormBuilder ,private advproServ: AdvisorprogramService, private advService: AdvisoropService, public dialog:MatDialog, private _snackBar:SnackBarService ) {
    this.admFieldForm = this.fb.group({
      adminNM: ['', Validators.required]
    });
   }
  
  ngOnInit(): void {
    this.advService.getAdvisorUers().subscribe((data:any)=>{
          this.adminsList = data;
    });

    //this.advproServ.getAllPrograms().subscribe((data:any)=>{
        //console.log(data);
    //})
  }

  onsubmit(){
    if(this.admFieldForm.valid)
    {
      //console.log(this.admFieldForm.value);
      //var adminName = this.admFieldForm.value.adminNM;
      var adminName = this.selectedValue;
      this.getUserProrgramLists(adminName);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.msort;
  }

  getUserProrgramLists(adminName:any){
    this.advproServ.getAdvisorProgramsByAdmin(adminName).subscribe((data:any)=>{
      this.progList = data;            
      this.dataSource = new MatTableDataSource(this.progList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.msort;

      if(this.progList.length > 0){
        this.visible = true;
      }else{
        this.visible = false;
      }  
    })
  }

  onAddProg(){
    //console.log(this.selectedValue);
    debugger;
    var admName = this.selectedValue;
    if(admName != "" && admName != undefined){
      var adminProg :Advisor_AdminProgrammes = {AdminName: admName, ID : 0, Programs : "",PragramsID:0};   
      let dialogRef = this.dialog.open(DialogAdvisorUserProgramComponent,{width:"30vw",data:adminProg});
  
      dialogRef.afterClosed().subscribe({
        next:(val)=>{
          if(val){
            this.getUserProrgramLists(admName);
          }
        },
        error:(err)=>{}
      });
    }   
  }

  deleteUSerPrograms(id:number){

    const message = `Are you sure you want to delete the user?`;
    var dialogData = new ConfirmDialogModel("Confirm Action",message);
    let diRef = this.dialog.open(DialogConfirmBoxComponent,{width:"25vw",data:dialogData});

    diRef.afterClosed().subscribe(diResult=>{
      console.log(diResult);
      if(diResult){
        this.advproServ.deleteAdvisorProgram(id).subscribe({
          next:(val:any)=>{
            this._snackBar.openSnackBar("Deleted Successfully","ok")
            this.getUserProrgramLists(this.selectedValue);
          }
        })
      }
    })
    
  }
}
