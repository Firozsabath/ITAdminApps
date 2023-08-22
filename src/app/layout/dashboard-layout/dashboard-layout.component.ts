import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  // showHead: boolean = false;

  // @ViewChild(MatSidenav)
  // sidenav!:MatSidenav;

  constructor(private observer: BreakpointObserver,private router: Router) { }

  ngOnInit(): void {
  }

  opened = true;

  navOpen($event): void {
    // toggle condition here
    this.opened = !this.opened;   
  }

}
