import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MheaderComponent } from './mheader/mheader.component';
import { CarousselSectionComponent } from './caroussel-section/caroussel-section.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { MfooterComponent } from './mfooter/mfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    MheaderComponent,
    CarousselSectionComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    MfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
