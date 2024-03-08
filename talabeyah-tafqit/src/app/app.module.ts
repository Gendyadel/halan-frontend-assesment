import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxTafqitModule, NgxTafqitService } from 'ngx-tafqit';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxTafqitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
