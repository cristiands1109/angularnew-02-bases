
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Vision'];
  
  heroeBorrado: string = '';

  borrarHeroe() {

  // SHIFT PUEDE REGRESAR UN STRING O UNDEFINE 
    // const heroeBorrado = this.heroes.shift() || '';
    // this.ListHeroeBorrado.push(heroeBorrado);
    // console.log(this.ListHeroeBorrado);

    this.heroeBorrado = this.heroes.shift() || '';

  }


}
