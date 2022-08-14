import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { MainComponent } from './main/main.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { PricingComponent } from './pricing/pricing.component';
import { TosComponent } from './tos/tos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'howitworks', component: HowitworksComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'tos', component: TosComponent },
      { path: 'partnership', component: PartnershipComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
