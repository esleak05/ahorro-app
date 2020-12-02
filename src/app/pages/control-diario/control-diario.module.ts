// Modulos core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos Personalizados
import { SharedModule } from './../../shared/shared.module';
import { ComponentsModule } from './../../components/components.module';

// Componentes Personalizados
import { ControlDiarioComponent } from './control-diario.component';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';
import { CuentasComponent } from './cuentas/cuentas.component';



@NgModule({
  declarations: [ControlDiarioComponent, PresupuestosComponent, CuentasComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ],
  exports: [
  ]
})
export class ControlDiarioModule { }
