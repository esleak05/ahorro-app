// Modulos core
import { Route } from '@angular/router';


// Modulos personalzados.


// Componentes personalizados
import { ControlDiarioComponent } from './control-diario.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';



export const routesControlDiario: Route =
   {path: 'control-diario', component: ControlDiarioComponent,
    children: [
      {path: 'presupuestos', component: PresupuestosComponent},
      {path: 'cuentas', component: CuentasComponent}
    ]};

