import { Component, OnInit } from '@angular/core';
import {Mascota} from 'src/app/shared/models/mascota'
import { Vacunas } from 'src/app/shared/models/Vacunas';
import {TipoMascota} from 'src/app/shared/models/tipo-mascota'
import { Propietario } from 'src/app/shared/models/propietario';
import { RazaMascota } from 'src/app/shared/models/raza-mascota';
import {Veterinario} from 'src/app/shared/models/veterinario';
import { CatalogoService } from 'src/app/shared/services/catalogo-service';
import {TipoVacuna} from 'src/app/shared/models/tipo-vacuna'
import { PropietarioService } from 'src/app/shared/services/propietario-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-input',
  templateUrl: './registro-input.component.html',
  styleUrls: ['./registro-input.component.css']
})
export class RegistroInputComponent implements OnInit {
  modelo = new Mascota();

  vacunaModelo = new Vacunas();

  vacunasArray = new Array<Vacunas>();

  tipoMascotaArray = new Array<TipoMascota>();

  razaMascotaArray = new Array<RazaMascota>();

  propietarioModelo = new Propietario();

  propietarioArray = new Array<Propietario>();

  veterinarioArray = new Array<Veterinario>();

  tipoVacunaArray = new Array<TipoVacuna>();

  constructor(
    private proveedorRutas: Router,
    private srvCatalogo:CatalogoService,
    private srvPropietario:PropietarioService) {


  }

  ngOnInit(): void {
    this.tipoMascotaArray = this.srvCatalogo.getTipoMascota();
    this.propietarioArray = this.srvPropietario.getPropietarios();
  }

  selectTipoMascotaChange():void{
    if(this.modelo.tipo != undefined){
      this.razaMascotaArray = this.srvCatalogo.getRazaMascota(this.modelo.tipo);
    }
  }

propietarioSelectChange():void{
  if(this.modelo.propietario != undefined){
    this.propietarioModelo = this.modelo.propietario;
  }
}

nuevoPropietario():void{
  this.modelo.propietario = undefined;
  this.propietarioModelo = new Propietario();
  this.proveedorRutas.navigate(['propietarios/input']);
}

  enviar():void{
    console.log("Enviando datos");
  }

}
