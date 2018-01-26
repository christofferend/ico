import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { IcolistComponent } from './icolist/icolist.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { IcocreateComponent } from './icocreate/icocreate.component';
import { IcodetailsComponent } from './icodetails/icodetails.component';
import { FooterComponent } from './footer/footer.component';
import { IcoService } from './ico.service';

@NgModule({
  declarations: [
    AppComponent,
    IcolistComponent,
    HeaderComponent,
    IntroductionComponent,
    IcocreateComponent,
    IcodetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    IcoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
