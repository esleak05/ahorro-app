import { MainLayoutComponent } from './../layout/main-layout/main-layout.component';
import { CuentasComponent } from './pages/cuentas/cuentas.component';
import { PresupuestosComponent } from './pages/presupuestos/presupuestos.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'control-diario',
  component: MainLayoutComponent,
  children: [
    {path: 'presupuestos', component: PresupuestosComponent},
    {path: 'cuentas', component: CuentasComponent},
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlDiarioRoutingModule { }
