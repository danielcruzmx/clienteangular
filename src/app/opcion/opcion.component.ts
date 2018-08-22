import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Opcion } from '../modelos/opcion.modelo';

@Component({
  selector: 'app-opcion',
  templateUrl: './opcion.component.html',
  styleUrls: ['./opcion.component.css']
})
export class OpcionComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() opcion: Opcion;

  //opciones: Opcion[];

  constructor() {
      //this.opciones = [
      //    new Opcion('CIEC Captura', 'http://localhost:8000/admin', 1),
      //    new Opcion('CIEC Reportes', 'http://localhost:8000/explorer', 2),
      //]
  }

  ngOnInit() {
  }

}
