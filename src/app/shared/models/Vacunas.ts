import {Veterinario} from "./veterinario";
import { TipoVacuna } from "./tipo-vacuna";

export class Vacunas{
  public id?:number;
  public idMascota?:number;
  public fecha?:string;
  public tipovacuna?:TipoVacuna;
  public observaacion?:string;
  public veterinario?:Veterinario;
  public vacunas?:Vacunas;
}
