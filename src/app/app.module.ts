import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MascotasModule} from './mascotas/mascotas.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([
			{
				path:'', children:[
					{path:'mascotas', loadChildren:'./mascotas/mascotas.module#MascotasModule'}
				]
			}
		]),
    BrowserModule,
    MascotasModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
