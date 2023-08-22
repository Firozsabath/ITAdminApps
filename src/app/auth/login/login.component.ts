import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { signinData } from 'src/app/Models/signinData';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true
  submitted = false   
  exMessage:any;
   constructor(private auth:AuthenticationService , private fb:FormBuilder, private _router:Router) { }
  //constructor() { }
 
  Loginform = this.fb.group({
    emailID:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
  })

  get Allcontrols(){
   return this.Loginform.controls;
  }

  counter = ''; 
  signindata: signinData;
  
  ngOnInit(): void {
   
  }

  // OnSubmit(signInForm: NgForm){
  //   this.signindata = signInForm.value;
  //   console.log(this.signindata);
  // }

   OnSubmit(values:any){
    this.submitted = true;
    if(this.Loginform.valid){
           
      this.auth.getValidated(this.Loginform.value).subscribe({
        next:(val:any)=>{
          console.log(val);
          this.counter = val.token;
            if(this.counter != null)
            {
              localStorage.setItem('token',this.counter);
              this._router.navigateByUrl('/dashboard/Studstatus')
            }
        },
        error:(val:any)=>{
          //console.log(val);
          this.exMessage = "Incorrect UserName or Password!";
          console.log(this.exMessage);
        }
      }
        // (res)=>{
        //     //console.log(res);
        //     this.counter = res.token;
        //     if(this.counter != null)
        //     {
        //       localStorage.setItem('token',this.counter);
        //       this._router.navigateByUrl('/dashboard/Studstatus')
        //     }
        //     //console.log(res);
        // },
        
       
        );
    }
   // console.log(this.signindata);
  }

}
