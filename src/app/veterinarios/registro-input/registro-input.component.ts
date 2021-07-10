import { Component, OnInit } from '@angular/core';
import {Veterinario} from 'src/app/shared/models/veterinario';
import { CatalogoService } from 'src/app/shared/services/catalogo-service';
import { Router } from '@angular/router';
import { VeterinarioService } from 'src/app/shared/services/veterinario-service';


@Component({
  selector: 'app-registro-input',
  templateUrl: './registro-input.component.html',
  styleUrls: ['./registro-input.component.css']
})
export class RegistroInputComponent implements OnInit {
  modelo = new Veterinario();


  veterinarioArray = new Array<Veterinario>();


  constructor(
    private proveedorRutas: Router,
    private srvCatalogo:CatalogoService,
    private srvVeterinario:VeterinarioService)     {


  }

  ngOnInit(): void {
    this.veterinarioArray=this.srvVeterinario.getVeterinarios();
  }



  enviar():void{
      console.log(this.modelo);
      this.srvVeterinario.guardarVeterinario(this.modelo);
      this.proveedorRutas.navigate(['veterinarios/list']);
      console.log("enviando datos");
  }

}
