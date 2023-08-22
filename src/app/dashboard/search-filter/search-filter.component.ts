import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { studentDetailsInfo } from 'src/app/Models/studentDetails';
import { LiveSearchService } from 'src/app/service/search/live-search.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  constructor(private getService : LiveSearchService) { }

  enteredSearch: string = '';
  searType: string = ''
  stud_details:Array<studentDetailsInfo>=[];
  @Output()
  searchText: EventEmitter<string> = new EventEmitter<string>();
  onsearchEvent()
  {
    this.searchText.emit(this.enteredSearch);   
  }  

  ngOnInit(): void {
  }

  sendData(event:any){
    this.searType = "Name";
    let searchstring: string = event.target.value;
    if(searchstring.length > 2)
      this.getService.searchStudentDetails(searchstring,this.searType)    
    .subscribe(
      results=> {
        this.stud_details = results 
        console.log(this.stud_details);
      })   
    
    //console.log(event.target.value)
  }

}
