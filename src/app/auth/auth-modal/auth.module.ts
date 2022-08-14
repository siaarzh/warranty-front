import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IMaskModule } from 'angular-imask';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { AuthModalComponent } from './auth-modal.component';

@NgModule({
  declarations: [AuthModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IMaskModule,
    NzModalModule,
    NzTabsModule,
    NzFormModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzAlertModule,
    NzCheckboxModule,
    NzToolTipModule,
  ],
  exports: [AuthModalComponent],
  providers: [],
})
export class AuthModule {}
