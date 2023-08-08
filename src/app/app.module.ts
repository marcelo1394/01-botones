import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BotonesModule } from './botones/botones.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BotonesModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
