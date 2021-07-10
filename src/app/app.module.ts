import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MascotasModule} from './mascotas/mascotas.module';
import {RouterModule} from '@angular/router';
import { PropietariosModule } from './propietarios/propietarios.module';
import { VeterinariosModule } from './veterinarios/veterinarios.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MascotasModule,
    PropietariosModule,
    VeterinariosModule,
    RouterModule.forRoot([
			{
				path:'', children:[
					{path:'mascotas', loadChildren:'./mascotas/mascotas.module#MascotasModule'},
          {path:'propietarios' , loadChildren:'./propietarios/propietarios.mudule#PropietariosModule'},
          {path:'veterinarios' , loadChildren:'./veterinarios/veterinarios.mocule#VeterinariosModule'},
        ]
			}
		]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
