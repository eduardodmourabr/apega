import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeCorpo01Component } from './components/home-corpo01/home-corpo01.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { GaasComponent } from './pages/gaas/gaas.component';
import { Faq2Component } from './components/faq2/faq2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarrosselComponent,
    FaqComponent,
    FooterComponent,
    HomeCorpo01Component,
    SobreNosComponent,
    GaasComponent,
    Faq2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
