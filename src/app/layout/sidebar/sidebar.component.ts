import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() closeSideNav = new EventEmitter();

  panelOpenState = false;
  
  onToggleClose(){
    this.closeSideNav.emit();
    //console.log(this.closeSideNav.emit());
  }
}
