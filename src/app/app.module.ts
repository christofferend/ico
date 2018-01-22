import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { IcolistComponent } from './icolist/icolist.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { IcocreateComponent } from './icocreate/icocreate.component'

@NgModule({
  declarations: [
    AppComponent,
    IcolistComponent,
    HeaderComponent,
    IntroductionComponent,
    IcocreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
