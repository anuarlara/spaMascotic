export class Veterinario{

  public id?:number;
  public nombre?:string;
  public apellidoPaterno?:string;
  public apellidoMaterno?:string;
  public numCedula?:string;
  public telefono?:string;
  public correo?:string;
  public direccion?:string;

  public toString():string{
  return this.nombre + " " + this.apellidoPaterno + " " + this.apellidoMaterno;
}
}
