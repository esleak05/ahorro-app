import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlDiarioComponent } from './../pages/control-diario/control-diario.component';
import { PresupuestosComponent } from './pages/presupuestos/presupuestos.component';
import { CuentasComponent } from './pages/cuentas/cuentas.component';




@NgModule({
  declarations: [PresupuestosComponent, CuentasComponent, ControlDiarioComponent],
  imports: [
    CommonModule
  ]
})
export class ControlDiarioModule { }
