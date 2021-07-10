import { Component, OnInit } from '@angular/core';
import { Veterinario } from 'src/app/shared/models/veterinario';
import { VeterinarioService } from 'src/app/shared/services/veterinario-service';

@Component({
  selector: 'app-registro-list',
  templateUrl: './registro-list.component.html',
  styleUrls: ['./registro-list.component.css']
})
export class RegistroListComponent implements OnInit {

  veterinarioList = new Array<Veterinario>();

  constructor( private srvVeterinario:VeterinarioService ) {


   }

  ngOnInit(): void {
    let veterinario1 = new Veterinario();
    veterinario1.nombre = "Raul";
    veterinario1.apellidoPaterno = "Luna";
    veterinario1.apellidoMaterno = "Martinez";
    veterinario1.telefono = "123456789";
    veterinario1.numCedula = "123456";
    veterinario1.correo = "luna@gmail.com";
    veterinario1.direccion = 'Domicilio Conocido';
    this.srvVeterinario.guardarVeterinario(veterinario1);

    this.veterinarioList=this.srvVeterinario.getVeterinarios();
    console.log(this.srvVeterinario.getVeterinarios());
  }
  nuevoVeterinario(){
    console.log("agregar nuevo veterinario");
  }

    eliminarVeterinario(veterinario:Veterinario):void{
    this.srvVeterinario.eliminarVeterinario(veterinario);
    }

}

