import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advisor_AdminProgrammes } from 'src/app/Models/Advisor_AdminProgrammes';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AdvisorprogramService {

  readonly UrlApi = environment.cudConfigAPI;
  readonly urlApiPrograms = "https://api.cud.ac.ae/cudcareer/api/";
  constructor(private http:HttpClient) { }

  getAdvisorPrograms(){
    return this.http.get<any>(this.UrlApi+"Advisor/GetAdvPrograms");
  }

  getAdvisorProgramsByAdmin(admin:any){
    return this.http.get<any>(this.UrlApi+`Advisor/GetAdvProgramsByAdmin/${admin}`);
  }

  addAdvisorProgram(data:Advisor_AdminProgrammes){
    return this.http.post<any>(this.UrlApi+"Advisor/AddUserProgram",data);
  }

  updateAdvisorProgram(id:number,data:Advisor_AdminProgrammes){
    return this.http.put<any>(this.UrlApi+`Advisor/UpdateAdvisorProg/${id}`,data);
  }

  deleteAdvisorProgram(id:number){
    return this.http.delete<any>(this.UrlApi+`Advisor/DeleteAdvProg/${id}`);
  }

  getAllPrograms(){
    return this.http.get<any>(this.urlApiPrograms+"DatatoForms/GetPrograms");
  }
}
