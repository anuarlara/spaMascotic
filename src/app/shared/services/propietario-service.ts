import { Injectable } from "@angular/core";
import { Propietario } from "../models/propietario";


@Injectable()
export class PropietarioService{
  private propietarioArray = new Array<Propietario>();

  constructor(){
    let p1 = new Propietario();
    p1.nombre= "Luz";
    p1.telefono = "222-222-222";
    p1.id=1;
    p1.direccion = "Calle 8, Av 6, Orizaba Ver";
    p1.correoElectronico = "luz89@gmail.com";
    p1.apellidoPaterno = "Hernandez";
    p1.apellidoMaterno = "Castillo";
    this.propietarioArray.push(p1);
    }

    public getPropietarios():Array<Propietario>{
      return this.propietarioArray;
    }
    }

