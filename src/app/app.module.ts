import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { PrelimComponent } from './prelim/prelim.component';
import { ActFinalsComponent } from './act-finals/act-finals.component';
import { ArtowrkComponent } from './artowrk/artowrk.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    HomeComponent,
    PrelimComponent,
    ActFinalsComponent,
    ArtowrkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
