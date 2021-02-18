import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Vision'];
  // ListHeroeBorrado: string [] = [];
  heroeBorrado: string = '';

  borrarHeroe() {

    // modo que yo hice
  //   console.log('Borrando...');
  //   let contador = this.heroes.length
  //   console.log(contador);

  //   if (contador>0){
  //     this.heroes.splice(contador-1);
  //   } else {
  //     console.log('Ya no existen elemento para borrar');
  //   }

  // SHIFT PUEDE REGRESAR UN STRING O UNDEFINE 
    // const heroeBorrado = this.heroes.shift() || '';
    // this.ListHeroeBorrado.push(heroeBorrado);
    // console.log(this.ListHeroeBorrado);

    this.heroeBorrado = this.heroes.shift() || '';

  }


}
