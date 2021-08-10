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
import { Ng2GoogleChartsModule, GoogleChartsSettings  } from 'ng2-google-charts';

@NgModule({
  declarations: [
    AppComponent
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
