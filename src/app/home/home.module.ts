import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { AuthModule } from '../auth/auth-modal/auth.module';
import { FooterComponent } from './footer/footer.component';
import { TosComponent } from './tos/tos.component';
import { PartnershipComponent } from './partnership/partnership.component';

@NgModule({
  imports: [HomeRoutingModule, NgZorroAntdModule, CommonModule, AuthModule],
  declarations: [
    HomeComponent,
    HeaderComponent,
    MainComponent,
    HowitworksComponent,
    AboutComponent,
    ContactComponent,
    PricingComponent,
    FooterComponent,
    TosComponent,
    PartnershipComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
