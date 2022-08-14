import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { ConsoleRoutingModule } from './console-routing.module';

import { FancyDatePipe } from '../shared/fancy-date.pipe';

import { ConsoleComponent } from './console.component';
import { NotificationItemComponent } from './notification/notification-list/notification-item/notification-item.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { NotificationMessageComponent } from './notification/notification-message/notification-message.component';
import { NotificationStartComponent } from './notification/notification-start/notification-start.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WarrantyDetailComponent } from './warranty/warranty-detail/warranty-detail.component';
import { WarrantyItemComponent } from './warranty/warranty-list/warranty-item/warranty-item.component';
import { WarrantyListComponent } from './warranty/warranty-list/warranty-list.component';
import { WarrantyStartComponent } from './warranty/warranty-start/warranty-start.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzListModule } from "ng-zorro-antd/list";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzEmptyModule } from "ng-zorro-antd/empty";

@NgModule({
  imports: [
    ConsoleRoutingModule,
    CommonModule,
    FormsModule,
    ScrollingModule,
    NzCardModule,
    NzAvatarModule,
    NzMenuModule,
    NzToolTipModule,
    NzBadgeModule,
    NzPopoverModule,
    NzIconModule,
    NzSwitchModule,
    NzLayoutModule,
    NzGridModule,
    NzDividerModule,
    NzListModule,
    NzDescriptionsModule,
    NzTagModule,
    NzBreadCrumbModule,
    NzEmptyModule
  ],
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
