// Core
import { Route } from '@angular/router';


// Componentes personalizados
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';

export const routesRegistroHistorico: Route =
  {path: 'registro',
   children: [
     {path: 'ingreso', component: IngresoComponent},
     {path: 'egreso', component: EgresoComponent},
     {path: 'presupuesto', component: PresupuestoComponent}
]};

