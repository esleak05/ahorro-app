import { Fuente } from '../interfaces/fuente-interface';
import { Tipo } from '../interfaces/tipo-interface';

export class Ingreso {
  id: string;
  monto: number;
  fuente: Fuente;
  tipo: Tipo;


  constructor(ingreso: any) {
    this.id = ingreso.id;
    this.monto = ingreso.monto;
    this.fuente = ingreso.fuente;
    this.tipo = ingreso.tipo;

  }

}
