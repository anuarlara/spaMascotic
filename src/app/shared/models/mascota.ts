import { Propietario } from "./propietario";
import {TipoMascota} from "./tipo-mascota";
import { RazaMascota } from "./raza-mascota";
import { Vacunas } from "./Vacunas";


export class Mascota{
  public id?:number;
  public nombre?:string;
  public fechaNacimiento?: string;
  public raza?:RazaMascota;
  public sexo?:string;
  public description?:string;
  public edad?:number;
  public tipo?: TipoMascota;
  public propietario?: Propietario;
  public vacunas: Array<Vacunas> = new Array<Vacunas>();

}

