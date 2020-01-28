import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { WarrantyDetailComponent } from './warranty/warranty-detail/warranty-detail.component';
import { WarrantyStartComponent } from './warranty/warranty-start/warranty-start.component';
import { WarrantyListComponent } from './warranty/warranty-list/warranty-list.component';

@NgModule({
  imports: [ConsoleRoutingModule, NgZorroAntdModule, CommonModule, FormsModule, ScrollingModule],
  declarations: [
    ConsoleComponent,
    SidenavComponent,
    WarrantyComponent,
    NotificationsComponent,
    ProfileComponent,
    SettingsComponent,
    WarrantyDetailComponent,
    WarrantyStartComponent,
    WarrantyListComponent,
  ],
})
export class ConsoleModule {}
