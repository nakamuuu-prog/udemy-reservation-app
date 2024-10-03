import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    // BrowserModuleはCommonModuleやApplicationModuleを継承したモジュールなので、CommonModuleの部品も使えるようになっている
    // REFE: https://v17.angular.io/api/platform-browser/BrowserModule
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
