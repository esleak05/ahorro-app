import { SeguimientoMetasRoutingModule } from './seguimiento-metas/seguimiento-metas-routing.module';
import { RegistroHistoricoRoutingModule } from './registro-historico/registro-historico-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalisisGastosRoutingModule } from './analisis-gastos/analisis-gastos-routing.module';
import { ControlDiarioRoutingModule } from './control-diario/control-diario-routing.module';
import { CuentaRoutingModule } from './cuenta/cuenta-routing.module';

// componentes personalizados.


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'registro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RegistroHistoricoRoutingModule,
            SeguimientoMetasRoutingModule,
            AnalisisGastosRoutingModule,
            ControlDiarioRoutingModule,
            CuentaRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
