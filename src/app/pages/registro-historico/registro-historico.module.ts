// Modulos core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modulos personalizados.
import { ComponentsModule } from './../../components/components.module';
import { SharedModule } from './../../shared/shared.module';

// Componentes personalizados
import { RegistroHistoricoComponent } from './registro-historico.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';

@NgModule({
  declarations: [
    RegistroHistoricoComponent,
    IngresoComponent,
    EgresoComponent,
    PresupuestoComponent,

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    FormsModule
  ],
  exports: [],
})
export class RegistroHistoricoModule {}
