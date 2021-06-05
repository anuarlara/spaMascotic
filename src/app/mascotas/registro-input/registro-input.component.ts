import { Component, OnInit } from '@angular/core';
import {Mascota} from 'src/app/shared/models/mascota'

@Component({
  selector: 'app-registro-input',
  templateUrl: './registro-input.component.html',
  styleUrls: ['./registro-input.component.css']
})
export class RegistroInputComponent implements OnInit {
  modelo = new Mascota();

  constructor() { }

  ngOnInit(): void {
  }
  enviar():void{
    console.log("Enviando datos");
  }

}
