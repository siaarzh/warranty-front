import { BrowserModule, Title } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { registerLocaleData } from '@angular/common';

import ru from '@angular/common/locales/ru';

import { NgZorroAntdModule, NZ_I18N, ru_RU, NzBreadCrumbModule } from 'ng-zorro-antd';
import { HomeModule } from './home/home.module';

registerLocaleData(ru);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzBreadCrumbModule,
    HomeModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU },
    { provide: LOCALE_ID, useValue: 'ru' },
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
