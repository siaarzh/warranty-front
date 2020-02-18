import { Component, OnInit } from '@angular/core';
import { AuthModalService } from '../../auth/auth-modal/auth-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

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
