import { Injectable } from "@angular/core";
import { RazaMascota } from "../models/raza-mascota";
import { TipoMascota } from "../models/tipo-mascota";
import { TipoVacuna } from "../models/tipo-vacuna";

@Injectable()
export class CatalogoService{

  public getTipoMascota(): Array<TipoMascota>{
    let array = new Array<TipoMascota>();
    let t1 = new TipoMascota();
    t1.id =1;
    t1.tipo = "Canino";
    array.push(t1);
    let t2 = new TipoMascota();
    t2.id = 2;
    t2.tipo = "Felino"
    array.push(t2);
    return array;
  }
  public getRazaMascota(tipoMascota:any):Array<RazaMascota>{
    let array = new Array<RazaMascota>();
    let r1 = new RazaMascota();
    r1.id = 1;
    r1.nombre = "Cruza";
    r1.tipo = tipoMascota;
    array.push(r1);
    if(tipoMascota.id == 1){//Perros
      let r2 = new RazaMascota();
      r2.id = 2;
      r2.nombre = "labrador";
      r2.tipo = tipoMascota;
      array.push(r2);
      let r3 = new RazaMascota();
      r3.id = 3;
      r3.nombre = "Pastor Aleman";
      r3.tipo = tipoMascota;
      array.push(r3);
      let r4 = new RazaMascota();
      r4.id = 4;
      r4.nombre = "Chihuahua";
      r4.tipo = tipoMascota;
      array.push(r4);
    }else { //Gatos
      let r5 = new RazaMascota();
      r5.id = 5;
      r5.nombre = "Angora";
      r5.tipo = tipoMascota;
      array.push(r5);
      let r6 = new RazaMascota();
      r6.id = 6;
      r6.nombre = "Persa";
      r6.tipo = tipoMascota;
      array.push(r6);
    }

    return array;
  }
  public getTipoVacunaMascota(tipoMascota:any):Array<TipoVacuna>{
    let array= new Array<TipoVacuna>();
    let v1 = new TipoVacuna();
    v1.id = 1;
    v1.nombre = "Rabia";
    v1.tipoMascota = tipoMascota;
    array.push(v1);
    if(tipoMascota.id == 1) { //perro
      let v2 = new TipoVacuna();
      v2.id = 2;
      v2.nombre = "Parvovirus";
      v2.tipoMascota = tipoMascota;
      array.push(v2);
    }else{ //gato
      let v3 = new TipoVacuna();
      v3.id = 3;
      v3.nombre = "Rabia";
      v3.tipoMascota = tipoMascota;
      array.push(v3);
    }
    return array;
    }
}
