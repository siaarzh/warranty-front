import { Component } from '@angular/core';

import { AuthModalService } from '../../auth/auth-modal/auth-modal.service';

@Component({
  selector: 'app-start',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
})
export class MainComponent {
  constructor(private authModalSub: AuthModalService) {}

  onLogin(): void {
    this.authModalSub.show();
  }
}
