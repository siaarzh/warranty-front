import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  imports: [
    ConsoleRoutingModule,
    NgZorroAntdModule,
    CommonModule,
  ],
  declarations: [
    ConsoleComponent,
    SidenavComponent,
    WarrantyComponent,
    NotificationsComponent,
  ],
})
export class ConsoleModule { }
