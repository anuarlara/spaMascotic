import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroInputComponent } from './registro-input/registro-input.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    RegistroInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RegistroInputComponent
  ]

})
export class MascotasModule { }
