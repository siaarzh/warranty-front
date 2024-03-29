import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { WarrantyDetailComponent } from './warranty/warranty-detail/warranty-detail.component';
import { WarrantyStartComponent } from './warranty/warranty-start/warranty-start.component';
import { WarrantyListComponent } from './warranty/warranty-list/warranty-list.component';
import { WarrantyItemComponent } from './warranty/warranty-list/warranty-item/warranty-item.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { NotificationItemComponent } from './notification/notification-list/notification-item/notification-item.component';
import { NotificationMessageComponent } from './notification/notification-message/notification-message.component';
import { NotificationStartComponent } from './notification/notification-start/notification-start.component';
import { FancyDatePipe } from '../shared/fancy-date.pipe';

@NgModule({
  imports: [ConsoleRoutingModule, NgZorroAntdModule, CommonModule, FormsModule, ScrollingModule],
  declarations: [
    ConsoleComponent,
    SidenavComponent,
    WarrantyComponent,
    NotificationComponent,
    ProfileComponent,
    SettingsComponent,
    WarrantyDetailComponent,
    WarrantyStartComponent,
    WarrantyListComponent,
    WarrantyItemComponent,
    NotificationListComponent,
    NotificationItemComponent,
    NotificationMessageComponent,
    NotificationStartComponent,
    FancyDatePipe,
  ],
})
export class ConsoleModule {}
