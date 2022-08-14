import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { AuthModule } from '../auth/auth-modal/auth.module';
import { HomeRoutingModule } from './home-routing.module';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { MainComponent } from './main/main.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { PricingComponent } from './pricing/pricing.component';
import { TosComponent } from './tos/tos.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    NzButtonModule,
    NzLayoutModule,
    NzDropDownModule,
    CommonModule,
    AuthModule,
    NzGridModule,
    NzBreadCrumbModule,
  ],
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
