import { TipoMascota } from "./tipo-mascota";

export class RazaMascota{
  public id?:number;
  public nombre?:string;
  public tipo?:TipoMascota;
  public toString():string{
    return this.nombre + "";
}
}
