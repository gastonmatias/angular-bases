import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
        <h1>{{titulo}}</h1>
        <h3>la base es: <strong>{{base}}</strong></h3>

        <button (click)="acumular(base)"> + {{ base }}</button>
            <span> {{numero}} </span>
        <button (click)="acumular(-5)">-{{base}}</button>
    `
})

export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;
    numeroBase: number = 10;
  
    acumular( valor: number ) {
        this.numero += valor;
    }
  
}