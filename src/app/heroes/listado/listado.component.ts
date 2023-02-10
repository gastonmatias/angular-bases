import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['spiderman','ironman','hulk','thor']
  heroeBorrado: string  = ''
  // heroeBorrado?: string //otra forma

  borrarHeroe () {
    this.heroeBorrado = this.heroes.shift() || ''
  }
}
