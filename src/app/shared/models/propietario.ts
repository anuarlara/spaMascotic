export class Propietario{
  public nombre?:string;
  public apellidoPaterno?:string;
  public apellidoMaterno?:string;
  public telefono?:string;
  public correoElectronico?:string;
  public direccion?:string;
  public id?:number;

public toString():string{
  return this.nombre + " " + this.apellidoPaterno + " " + this.apellidoMaterno;
}
}
