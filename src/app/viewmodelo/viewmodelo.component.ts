import { Component, OnInit } from '@angular/core';
import { Movimiento }        from '../modelos/movimientos.modelo';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})

export class ViewmodeloComponent {

  movimiento = new Movimiento(1,"2016-02-01","CARGO",
              "PENA POR MORA DE CUOTA EXTRA PINTURA ENE-2016",
              "A303 DANIEL CRUZ | VICTORIA GONZALEZ", 100.0, 0.0, 14950.0);



  constructor() { }

  ngOnInit() {
  }

}
