import { PresupuestoComponent } from './pages/presupuesto/presupuesto.component';
import { MainLayoutComponent } from './../layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EgresoComponent } from './pages/egreso/egreso.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';

const routes: Routes = [{
  path: 'registro',
  component: MainLayoutComponent,
  children: [
    {path: 'ingreso', component: IngresoComponent},
    {path: 'egreso', component: EgresoComponent},
    {path: 'presupuesto', component: PresupuestoComponent}
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroHistoricoRoutingModule { }
