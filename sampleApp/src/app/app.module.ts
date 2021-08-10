/*
 * COPYRIGHT:  EC
 * PROJECT:    GALILEO
 * FILE:       app.module.ts
 * HISTORY:    The change record of this file is available at the end of the file
 * -----------------------------------------------------------------------------
 * EC Proprietary Information. Unauthorised distribution, dissemination or disclosure not allowed.
 * -----------------------------------------------------------------------------
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select'; 
import { FormsModule } from '@angular/forms';
import {  MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { Ng2GoogleChartsModule, GoogleChartsSettings  } from 'ng2-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    Ng2GoogleChartsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
