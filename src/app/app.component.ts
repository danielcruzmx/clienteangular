import { Component } from '@angular/core';
import { Opcion } from './modelos/opcion.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  opciones: Opcion[];

  constructor() {
    this.opciones = [
      new Opcion('Cambio de periodos', 'http://localhost:8000/admin/main/periodo/', "__/", "CIEC"),
      new Opcion('Captura de movimientos', 'http://localhost:8000/admin/c_olimpo/movimiento/', "|||", "Olimpo"),
      new Opcion('Captura de movimientos', 'http://localhost:8000/admin/c_sadiochouno/movimiento/', "8i","Sadi"),
      new Opcion('Depositos y retiros por mes', 'http://localhost:8000/explorer/23/download?format=csv', "8i","Sadi")
    ];
  }

  addOption(titulo: HTMLInputElement, link: HTMLInputElement): any {
      console.log(`Agegar opcion: ${titulo.value} and link: ${link.value}`);
      this.opciones.push(new Opcion(titulo.value, link.value,"0","0"));
      titulo.value = '';
      link.value = '';
      //logo.value = '';
      //nombre.value = '';
      return false;
  }

}
