import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logbtnHide = true;
  constructor(private _router:Router) { }

  @Output()
  open: EventEmitter<boolean> = new EventEmitter()
  clickMenu() {
    this.open.emit(true);    
  }

  ngOnInit(): void {
    var token = localStorage.getItem('token');
    if(token!=null){
      this.logbtnHide = false;
    }
  }

  logout(){
    debugger;
    localStorage.clear();
    this._router.navigateByUrl('/auth')
  }

}
