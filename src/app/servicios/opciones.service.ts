import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx'

@Injectable()


export class OpcionesService {

  presUrl = 'http://localhost:8000/catalogos/menu/'

  constructor(private http: Http) {
  }

  getOpciones(){
    return this.http.get(this.presUrl.concat()).map(res => res.json());
  }

}
