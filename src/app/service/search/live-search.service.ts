import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,debounceTime, map, } from 'rxjs';
import { studentDetailsInfo } from 'src/app/Models/studentDetails';

@Injectable({
  providedIn: 'root'
})
export class LiveSearchService {

  constructor(private http:HttpClient) { }

  searchStudentDetails(Query:string, Type:string): Observable<studentDetailsInfo[]>{
    return this.http.get<studentDetailsInfo[]>("https://localhost:44389/api/Admissions/Camsdetails/"+Query+"/"+Type).pipe(debounceTime(10000)) //This line is to make the system wait for one sec before it hit the db, by that way we can minimize the database hit.;
  }

}
