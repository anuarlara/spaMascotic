import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroInputComponent } from './registro-input/registro-input.component';
import {FormsModule} from '@angular/forms';
import { RegistroListComponent } from './registro-list/registro-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    RegistroInputComponent,
    RegistroListComponent
  ],
  imports: [

    //http://localhost:4200/mascotas/input
		//http://localhost:4200/mascotas/list
		RouterModule.forRoot([
      {path:'mascotas',children:[
          {path:'list', component: RegistroListComponent},
          {path:'input', component:RegistroInputComponent}
        ]
      }
      ]),

    CommonModule,
    FormsModule,
    //http://localhost:4200/mascotas/input
    //http://localhost:4200/mascotas/list
    RouterModule.forRoot([
        {path:'mascotas' , children:[
          {path:'list', component: RegistroListComponent},
          {path:'input', component:RegistroInputComponent}
        ]
      }
    ])
  ],
  exports: [
    RegistroInputComponent,
    RegistroListComponent
  ]

})
export class MascotasModule { }
