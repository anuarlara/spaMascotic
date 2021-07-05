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
    BrowserModule,
    MascotasModule,
    RouterModule.forRoot([
			{
				path:'', children:[
					{path:'mascotas', loadChildren:'./mascotas/mascotas.module#MascotasModule'}
				]
			}
		]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
