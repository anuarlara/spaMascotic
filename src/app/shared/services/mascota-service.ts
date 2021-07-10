import { Injectable } from "@angular/core";
import { Mascota } from "../models/mascota";

@Injectable()
export class MascotaService{

  private mascotaArray = new Array<Mascota>();
  constructor(){

  }

  public guardarMascota(m:Mascota):void{
    this.mascotaArray.push(m);
  }

  public eliminarMascota(m :Mascota):void{
    this.mascotaArray.forEach((element, i) =>{
      if(element == m){
        this.mascotaArray.splice(i,1);
      }
    } );
  }


public getMascotas():Array<Mascota>{
    return this.mascotaArray;
  }
}
