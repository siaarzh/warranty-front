import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {
  sidenavCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  onSelectNotificationMenu() {

  }

  onSelectWarrantyMenu() {

  }

  onSelectSearch() {

  }
}
