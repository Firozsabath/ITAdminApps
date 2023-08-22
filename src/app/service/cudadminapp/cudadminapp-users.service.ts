import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminAppUsers } from 'src/app/Models/AdminAppUser';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class CudadminappUsersService {
  //readonly apiUrl = "https://localhost:44363/api/";
  readonly apiUrl = environment.cudConfigAPI;

  constructor(private httpclient:HttpClient) { }

  getadminAppUsers(){
    return this.httpclient.get<any>(this.apiUrl+"CudAdminAppUsers");
  }

  addadminAppUsers(data:AdminAppUsers){    
    return this.httpclient.post<any>(this.apiUrl+"CudAdminAppUsers", data);
  }

  deleteadminAppUsers(id:number){
    return this.httpclient.delete<any>(this.apiUrl+`CudAdminAppUsers/${id}`);
  }

  updateadminAppUser(id:number, data:AdminAppUsers){
    debugger;
    return this.httpclient.put<any>(this.apiUrl+`CudAdminAppUsers/${id}`,data);
  }
}
