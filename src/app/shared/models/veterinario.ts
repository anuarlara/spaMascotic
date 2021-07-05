export class Veterinario{

  public id?:number;
  public nombre?:string;
  public apellidoPaterno?:string;
  public apellidoMaterno?:string;
  public numCedula?:string;

public toString():string{
  return this.nombre + " " + this.apellidoPaterno + " " + this.apellidoMaterno;
}
}
