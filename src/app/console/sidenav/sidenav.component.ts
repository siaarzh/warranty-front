import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass'],
})
export class SidenavComponent {
  sidenavCollapsed = true;
  selectedMenuItem = 'warranties';

  nightMode = false;
  nightModeText = 'night';

  onSelectNotificationMenu(): void {
    this.selectedMenuItem = 'notification';
  }

  onSelectWarrantyMenu(): void {
    this.selectedMenuItem = 'warranties';
  }

  onSelectSearch(): void {
    this.selectedMenuItem = 'search';
  }

  onSelectHelp(): void {
    this.selectedMenuItem = 'help';
  }

  onSelectProfile(): void {
    this.selectedMenuItem = 'profile';
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
