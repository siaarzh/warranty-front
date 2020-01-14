import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AuthModalComponent } from '../auth/auth-modal/auth-modal.component';
import { StartComponent } from './start/start.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    NgZorroAntdModule,
    CommonModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    AuthModalComponent,
    StartComponent,
    HowitworksComponent,
    AboutComponent,
    ContactComponent,
    PricingComponent
  ],
})
export class HomeModule { }
