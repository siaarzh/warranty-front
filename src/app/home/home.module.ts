import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AuthModalComponent } from '../auth/auth-modal/auth-modal.component';
import { StartComponent } from './start/start.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [HomeRoutingModule, NgZorroAntdModule, CommonModule],
  declarations: [HomeComponent, HeaderComponent, AuthModalComponent, StartComponent, HowitworksComponent],
  exports: [HomeComponent, AuthModalComponent, HeaderComponent, StartComponent, HowitworksComponent],
})
export class HomeModule { }
