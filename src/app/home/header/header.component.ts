import { Component, HostListener, OnInit } from '@angular/core';

import { AuthModalService } from '../../auth/auth-modal/auth-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  toggle = false;

  toggleMenu(): void {
    this.toggle = !this.toggle;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.toggle) {
      console.log('clicked outside');
    }
    this.toggle = false;
  }

  constructor(private authModalSub: AuthModalService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authModalSub.isLoggedIn();
  }

  onLoginLogout(): void {
    if (!this.isLoggedIn) {
      this.authModalSub.show();
    } else {
      this.authModalSub.signout();
      this.isLoggedIn = false;
    }
  }
}
