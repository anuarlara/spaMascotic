import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroInputComponent } from './registro-input/registro-input.component';
import {FormsModule} from '@angular/forms';
import { RegistroListComponent } from './registro-list/registro-list.component';
import {RouterModule} from '@angular/router';
import { CatalogoService } from '../shared/services/catalogo-service';
import { VeterinarioService } from '../shared/services/veterinario-service';

@NgModule({
  declarations: [
    RegistroInputComponent,
    RegistroListComponent
  ],
  imports: [

    CommonModule,
    FormsModule,
    //http://localhost:4200/veterinarios/input
    //http://localhost:4200/veterinarios/list
    RouterModule.forRoot([
        {path:'veterinarios' , children:[
          {path:'list', component:RegistroListComponent},
          {path:'input', component:RegistroInputComponent}
        ]
      }
    ])
  ],
  exports: [
    RegistroInputComponent,
    RegistroListComponent
  ],
  providers:[
    CatalogoService,
    VeterinarioService
  ]

})


export class VeterinariosModule { }
