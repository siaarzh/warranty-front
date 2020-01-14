import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthModalService } from './auth-modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.sass']
})
export class AuthModalComponent implements OnInit, OnDestroy {
  private authModalSub: Subscription;
  isVisible = false;
  isConfirmLoading = false;

  constructor(private authModalService: AuthModalService) {
  }

  ngOnInit() {
    this.authModalSub = this.authModalService.isShown.subscribe((show: boolean) => {
      this.isVisible = show;
    });
  }

  ngOnDestroy() {
    this.authModalSub.unsubscribe();
  }

  handleCancel() {
    this.authModalService.hide();
  }

  handleOk() {
    // ...
  }
}
