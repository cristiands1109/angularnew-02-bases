import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent  {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService) {

  }

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    
    this.nuevo= { nombre: '', poder: 0}
    
  }

}