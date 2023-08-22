import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly apiUrl = environment.cudApi;

  constructor(private httpClient:HttpClient) { }

  getValidated(data: any)
  {
    return this.httpClient.post<any>(this.apiUrl+"AccessToken",data);
  }

}
