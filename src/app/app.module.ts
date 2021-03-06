import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { SaleComponent } from './sale/sale.component';
import { GiftingComponent } from './gifting/gifting.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WomenComponent,
    MenComponent,
    SaleComponent,
    GiftingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
