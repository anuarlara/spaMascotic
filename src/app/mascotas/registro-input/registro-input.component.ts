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
import { MascotaService } from 'src/app/shared/services/mascota-service';
import { VeterinarioService } from 'src/app/shared/services/veterinario-service';

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
    private srvCatalogo:CatalogoService,
    private srvPropietario:PropietarioService,
    private proveedorRutas: Router,
    private srvVeterinario:VeterinarioService,
    private srvMascota: MascotaService){

    }

  ngOnInit(): void {
    this.tipoMascotaArray = this.srvCatalogo.getTipoMascota();
    this.propietarioArray = this.srvPropietario.getPropietarios();
    this.veterinarioArray = this.srvVeterinario.getVeterinarios();
  }

  selectTipoMascotaChange():void{
    if(this.modelo.tipo != undefined){
       this.razaMascotaArray = this.srvCatalogo.getRazaMascota(this.modelo.tipo);
       this.tipoVacunaArray = this.srvCatalogo.getTipoVacunaMascota(this.modelo.tipo);
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
    this.modelo.vacunas = this.vacunasArray;
    console.log(this.modelo);
    this.srvMascota.guardarMascota(this.modelo);
    this.proveedorRutas.navigate(['mascotas/list']);
    console.log("Enviando datos");
  }

  agregarVacuna():void{
    this.vacunasArray.push(this.vacunaModelo);
    this.vacunaModelo = new Vacunas();
  }

  eliminarVacuna(vacuna:Vacunas):void{
    this.vacunasArray.forEach((element, i) =>{
      if(vacuna == element){
        this.vacunasArray.splice(i,1);
      }
    } );
  }
}
