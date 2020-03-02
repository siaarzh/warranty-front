import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthModalService } from '../../auth/auth-modal/auth-modal.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass'],
})
export class SidenavComponent implements OnInit {
  sidenavCollapsed = true;
  selectedMenuItem = 'warranties';

  nightMode = false;
  nightModeText = 'ночной';

  constructor(private route: ActivatedRoute, private router: Router, private authModalService: AuthModalService) {}

  ngOnInit(): void {
    console.log('DEBUG: ', this.route);
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
    if (this.nightModeText === 'ночной') {
      this.nightModeText = 'дневной';
      this.nightMode = true;
    } else {
      this.nightModeText = 'ночной';
      this.nightMode = false;
    }
  }

  onLogout(): void {
    this.authModalService.signout();
    this.router.navigate(['/']);
  }
}
