export class Movimiento {
  public id: number;
  public fecha: any;
  public tipo: string;
  public descripcion: string;
  public condomino: string;
  public cargo: number;
  public abono: number;
  public saldo: number;


  constructor(id:          number, fecha:     any,    tipo: string,
              descripcion: string, condomino: string, cargo: number,
              abono:       number, saldo: number )
  {
      this.id          = id;
      this.fecha       = fecha;
      this.tipo        = tipo;
      this.descripcion = descripcion;
      this.condomino   = condomino;
      this.cargo       = cargo;
      this.abono       = abono;
      this.saldo       = saldo;
  }

}
