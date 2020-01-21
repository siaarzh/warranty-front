import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { WarrantyRoutingModule } from './warranty-routing.module';
import { WarrantyComponent } from './warranty.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    WarrantyRoutingModule,
    NgZorroAntdModule,
    CommonModule,
  ],
  declarations: [
    WarrantyComponent,
    SidenavComponent,
  ],
})
export class WarrantyModule { }
