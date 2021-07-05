import { TipoMascota } from "./tipo-mascota";

export class TipoVacuna{
  public id?:number;
  public nombre?:string;
  public tipoMascota:TipoMascota = new TipoMascota();

  public toString():string{
    return this.nombre + "";
  }
}
