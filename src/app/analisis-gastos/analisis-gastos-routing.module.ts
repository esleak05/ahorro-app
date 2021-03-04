import { MainLayoutComponent } from './../layout/main-layout/main-layout.component';
import { TrabajoComponent } from './pages/trabajo/trabajo.component';
import { SalidasComponent } from './pages/salidas/salidas.component';
import { CuentasComponent } from  './pages/cuentas/cuentas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: 'analisis-gastos',
  component: MainLayoutComponent,
  children: [
    {path: 'cuentas', component: CuentasComponent},
    {path: 'salidas', component: SalidasComponent},
    {path: 'trabajo', component: TrabajoComponent}
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalisisGastosRoutingModule { }
