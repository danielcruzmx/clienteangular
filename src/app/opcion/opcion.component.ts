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

  constructor() {
    //console.log(opcion.titulo);
  }

  ngOnInit() {
  }

}
