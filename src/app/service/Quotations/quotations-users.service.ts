import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tbl_QuotationUsers } from 'src/app/Models/Tbl_QuotationUsers';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class QuotationsUsersService {

  readonly apiUrl = environment.cudConfigAPI;

  constructor(private http:HttpClient) { }

  getQuotationsUsers(){
    return this.http.get<any>(this.apiUrl+"Quotations");
  }

  addQuotationsUsers(data:Tbl_QuotationUsers){    
    return this.http.post<any>(this.apiUrl+"Quotations", data);
  }

  deleteQuotationsUsers(id:number){
    return this.http.delete<any>(this.apiUrl+`Quotations/${id}`);
  }

  updateQuotUser(id:number, data:Tbl_QuotationUsers){
    debugger;
    return this.http.put<any>(this.apiUrl+`Quotations/${id}`,data);
  }

}
