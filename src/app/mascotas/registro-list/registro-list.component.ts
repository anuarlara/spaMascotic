import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/shared/models/mascota';
import { Propietario } from 'src/app/shared/models/propietario';

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
    mascota1.propietario = new Propietario();
    mascota1.propietario.nombre = "Angelica";
    mascota1.propietario.apellidoPaterno = "Jimenez"
    mascota1.propietario.apellidoMaterno = "Andrade";
    this.mascotasList.push(mascota1);

    let mascota2 = new Mascota();
    mascota2.propietario = new Propietario();
    mascota2.nombre = "Firulais";
    mascota2.edad = 2;
    mascota2.sexo = "Macho";
    mascota2.propietario.nombre = "Angelica";
    mascota2.propietario.apellidoPaterno = "Jimenez"
    mascota2.propietario.apellidoMaterno = "Andrade";
    this.mascotasList.push(mascota2);

    let mascota3 = new Mascota();
    mascota3.propietario = new Propietario();
    mascota3.nombre = "Kira";
    mascota3.edad = 1;
    mascota3.sexo = "Hembra";
    mascota3.propietario.nombre = "Anuar";
    mascota3.propietario.apellidoPaterno = "Lara"
    mascota3.propietario.apellidoMaterno = "Casillas";
    this.mascotasList.push(mascota3);

    let mascota4 = new Mascota();
    mascota4.propietario = new Propietario();
    mascota4.nombre = "Daisy";
    mascota4.edad = 2;
    mascota4.sexo = "Hembra";
    mascota4.propietario.nombre = "Guadalupe";
    mascota4.propietario.apellidoPaterno = "Ugalde"
    mascota4.propietario.apellidoMaterno = "Flores";
    this.mascotasList.push(mascota4);

    let mascota5 = new Mascota();
    mascota5.propietario = new Propietario();
    mascota5.nombre = "Angus";
    mascota5.edad = 3;
    mascota5.sexo = "Macho";
    mascota5.propietario.nombre = "Guadalupe";
    mascota5.propietario.apellidoPaterno = "Ugalde"
    mascota5.propietario.apellidoMaterno = "Flores";
    this.mascotasList.push(mascota5);

    console.log(this.mascotasList)
  }

    eliminarMascota(mascota:Mascota):void{
      this.mascotasList.forEach((element, index) =>{
        if(element == mascota){
          this.mascotasList.splice(index, 1);
        }
      });
    }
    editarMascota(mascota:Mascota):void{

    }
}
