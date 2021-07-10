import { Injectable } from "@angular/core";
import { Veterinario } from "../models/veterinario";

@Injectable()
export class VeterinarioService{
  private veterinarioArray = new Array<Veterinario>();
  constructor(){
    let v1 = new Veterinario();
    v1.id = 1;
    v1.nombre = "Ximena";
    v1.apellidoPaterno = "Hernandez";
    v1.apellidoMaterno = "Lopez";
    v1.numCedula = "12345678";
    v1.telefono = "2720000000"
    v1.correo = "ximena@hotmail.com";
    v1.direccion = "Domicilio Conocido, Orizaba, Ver"
    this.veterinarioArray.push(v1);
  }
  public guardarVeterinario(m:Veterinario):void{
    this.veterinarioArray.push(m);
  }
  public getVeterinarios():Array<Veterinario>{

    return this.veterinarioArray;
  }
  public eliminarVeterinario(m:Veterinario):void{
    this.veterinarioArray.forEach((element, i)=>{
      if(element == m){
        this.veterinarioArray.splice(i,1);
      }
    })
  }
}
