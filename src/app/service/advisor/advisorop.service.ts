import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tbl_user_foradvisorupdate } from 'src/app/Models/tbl_user_foradvisorupdate';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AdvisoropService {

  readonly apiUrl = environment.cudConfigAPI;

  constructor(private http:HttpClient) { }

  getAdvisorUers():Observable<any>{
    return this.http.get<any>(this.apiUrl+"Advisor");
  }
  addAdvisorUser(data:tbl_user_foradvisorupdate):Observable<any>{
    return this.http.post<any>(this.apiUrl+"Advisor",data);
  }
  updateAdvisorUser(id:number,data:tbl_user_foradvisorupdate):Observable<any>{
    return this.http.put<any>(this.apiUrl+`Advisor/${id}`,data);
  }
  deleteAdvisorUser(id:number):Observable<any>{
    return this.http.delete<any>(this.apiUrl+`Advisor/${id}`);
  }
}
