// Modulos core.
import { Route } from '@angular/router';

// Componentes personalizados
import { AnalisisGastosComponent } from './analisis-gastos.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { SalidasComponent } from './salidas/salidas.component';

export const routesAnalisisGastos: Route = {
  path: 'analisis-gastos',
  component: AnalisisGastosComponent,
  children: [
    { path: 'trabajo', component: TrabajoComponent },
    { path: 'cuentas', component: CuentasComponent },
    { path: 'salidas', component: SalidasComponent },
  ],
};
