import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class AppstatsService {

  readonly apiUrl = environment.cudConfigAPI;
  constructor(private httpclient:HttpClient) { }

  getCustomAppStats():Observable<any>{
    return this.httpclient.get<any>(this.apiUrl+"AppStats");
  }

  getQuotRatio():Observable<any>{
    return this.httpclient.get<any>(this.apiUrl+"AppStats/GetQuotationRatio")
  }
}
