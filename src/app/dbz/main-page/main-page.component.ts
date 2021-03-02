import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor() {}


  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  cambiarNombre(evento: any) {

    console.log(evento);
  }

}
