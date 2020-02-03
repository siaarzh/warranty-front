import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass'],
})
export class SidenavComponent implements OnInit {
  sidenavCollapsed = true;
  selectedMenuItem = 'warranties';

  nightMode = false;
  nightModeText = 'night';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route);
  }

  onSelectSearch(): void {
    // TODO: Implement search modal
    this.selectedMenuItem = 'search';
  }

  onSelectHelp(): void {
    // TODO: Implement help modal
    this.selectedMenuItem = 'help';
  }

  onSwitchNightMode(): void {
    if (this.nightModeText === 'night') {
      this.nightModeText = 'day';
      this.nightMode = true;
    } else {
      this.nightModeText = 'night';
      this.nightMode = false;
    }
  }
}
