import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/shared/models/mascota';

@Component({
  selector: 'app-registro-list',
  templateUrl: './registro-list.component.html',
  styleUrls: ['./registro-list.component.css']
})
export class RegistroListComponent implements OnInit {

  mascotasList = new Array<Mascota>();

  constructor() { }

  ngOnInit(): void {
    let mascota1 = new Mascota();
    mascota1.nombre = "Roko";
    mascota1.edad = 2;
    mascota1.sexo = "Macho";
    mascota1.propietario.nombre = "Angelica";
    mascota1.propietario.apellidoPaterno = "Jimenez"
    mascota1.propietario.apellidoMaterno = "Andrade";
    this.mascotasList.push(mascota1);

    let mascota2 = new Mascota();
    mascota2.nombre = "Firulais";
    mascota2.edad = 2;
    mascota2.sexo = "Macho";
    mascota2.propietario.nombre = "Angelica";
    mascota2.propietario.apellidoPaterno = "Jimenez"
    mascota2.propietario.apellidoMaterno = "Andrade";
    this.mascotasList.push(mascota2);

    console.log(this.mascotasList)
  }

    eliminarMascota(mascota:Mascota):void{
      this.mascotasList.forEach((element, index) =>{
        if(element == mascota){
          this.mascotasList.splice(index, 1);
        }
      });
    }

}
