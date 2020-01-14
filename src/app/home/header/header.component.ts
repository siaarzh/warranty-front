import { Component, OnInit } from '@angular/core';
import { AuthModalService } from '../../auth/auth-modal/auth-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private authModalSub: AuthModalService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authModalSub.show();
  }
}
