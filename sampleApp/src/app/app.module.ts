import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select'; 
import { FormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule, GoogleChartsSettings  } from 'ng2-google-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    Ng2GoogleChartsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
