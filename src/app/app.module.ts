import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MascotasModule} from './mascotas/mascotas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MascotasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
