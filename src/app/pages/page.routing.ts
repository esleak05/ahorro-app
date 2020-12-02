import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Rutas hijas.
import { routesRegistroHistorico } from './registro-historico/registro-historico.routing';
import { routesControlDiario } from './control-diario/control-diario.routing';
import { routesAnalisisGastos } from './analisis-gastos/analisis-gastos.routing';
import { routesSeguimientoMetas } from './seguimiento-metas/seguimiento-metas.routing';
import { routesCuenta } from './cuenta/cuenta.routing';


// Componentes personalizados
import { AhorroComponent } from './ahorro/ahorro.component';


export const routes: Routes = [
   {path: 'ahorro', component: AhorroComponent,
    children: [
      routesRegistroHistorico,
      routesControlDiario,
      routesAnalisisGastos,
      routesSeguimientoMetas,
      routesCuenta
    ]}
  //  {path: 'registro', pathMatch: 'full', redirectTo: 'registro'},
  //  {path: 'analisis-gastos', pathMatch: 'full', redirectTo: 'analisis-gastos'},
  //  {path: 'control-diario', pathMatch: 'full', redirectTo: 'control-diario'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

