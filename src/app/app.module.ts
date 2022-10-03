import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { DialogFirstComponent } from './dialog-first/dialog-first.component';
import { DialogSecondComponent } from './dialog-second/dialog-second.component';
import { DialogThirdComponent } from './dialog-third/dialog-third.component';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    DialogFirstComponent,
    DialogSecondComponent,
    DialogThirdComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatRadioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
