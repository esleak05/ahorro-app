import { Fuente } from "./fuente";
import { Tipo } from "./tipo";

export interface Ingreso {
  id: string;
  monto: number;
  fuente: Fuente;
  tipo: Tipo;
}
