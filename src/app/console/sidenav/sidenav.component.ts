import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {
  sidenavCollapsed = true;
  selectedMenuItem = 'warranties';

  constructor() { }

  ngOnInit() {
  }

  onSelectNotificationMenu() {
    this.selectedMenuItem = 'notifications';
  }

  onSelectWarrantyMenu() {
    this.selectedMenuItem = 'warranties';
  }

  onSelectSearch() {
    this.selectedMenuItem = 'search';
  }

  onSelectHelp() {
    this.selectedMenuItem = 'help';
  }

  onSelectProfile() {
    this.selectedMenuItem = 'profile';
  }

}
