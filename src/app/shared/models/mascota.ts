import { Propietario } from "./propietario";
import {TipoMascota} from "./tipo-mascota";

export class Mascota{
  public nombre?:string;
  public fechaNacimiento?: string;
  public raza?:string;
  public sexo?:string;
  public description?:string;
  public edad?:number;
  public tipo: TipoMascota = new TipoMascota();
  public propietario: Propietario = new Propietario();
}
