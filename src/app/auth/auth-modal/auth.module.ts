import { NgModule } from '@angular/core';
import { AuthModalComponent } from './auth-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [AuthModalComponent],
  imports: [CommonModule, NgZorroAntdModule, ReactiveFormsModule, IMaskModule],
  exports: [AuthModalComponent],
  providers: [],
})
export class AuthModule {}
