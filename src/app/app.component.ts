import { Component } from '@angular/core';
import { Opcion } from './modelos/opcion.modelo';
import { OpcionesService } from './servicios/opciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  opciones: Opcion[] = [];

  constructor(private opcionesService: OpcionesService) {

    this.opcionesService.getOpciones().subscribe(ops => {
       for( const id$ in ops){
            console.log(ops[id$].titulo);
            this.opciones.push(new Opcion(ops[id$].titulo, ops[id$].link, ops[id$].logo, ops[id$].nombre));
       }
    })

  }
}
