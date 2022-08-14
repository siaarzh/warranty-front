import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth-modal/auth.guard';

import { ConsoleComponent } from './console.component';
import { NotificationMessageComponent } from './notification/notification-message/notification-message.component';
import { NotificationStartComponent } from './notification/notification-start/notification-start.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { WarrantyDetailComponent } from './warranty/warranty-detail/warranty-detail.component';
import { WarrantyStartComponent } from './warranty/warranty-start/warranty-start.component';
import { WarrantyComponent } from './warranty/warranty.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ConsoleComponent,
    children: [
      { path: '', redirectTo: 'warranty', pathMatch: 'full' },
      {
        path: 'warranty',
        component: WarrantyComponent,
        children: [
          { path: '', component: WarrantyStartComponent },
          { path: ':id', component: WarrantyDetailComponent },
        ],
      },
      {
        path: 'notification',
        component: NotificationComponent,
        children: [
          { path: '', component: NotificationStartComponent },
          { path: ':id', component: NotificationMessageComponent },
        ],
      },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsoleRoutingModule {}
