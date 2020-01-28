import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsoleComponent } from './console.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { WarrantyDetailComponent } from './warranty/warranty-detail/warranty-detail.component';
import { WarrantyStartComponent } from './warranty/warranty-start/warranty-start.component';

const routes: Routes = [
  {
    path: '',
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
      { path: 'notifications', component: NotificationsComponent },
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
