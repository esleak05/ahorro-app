import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules personalizados.
import { ComponentsModule } from './../components/components.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { RegistroHistoricoModule } from './registro-historico/registro-historico.module';
import { AnalisisGastosModule } from './analisis-gastos/analisis-gastos.module';
import { SeguimientoMetasModule } from './seguimiento-metas/seguimiento-metas.module';
import { PagesRoutingModule } from './page.routing';

// Componentes personalizados.
import { AhorroComponent } from './ahorro/ahorro.component';

@NgModule({
  declarations: [AhorroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    PagesRoutingModule,
    SharedModule,
    RegistroHistoricoModule,
    AnalisisGastosModule,
    SeguimientoMetasModule,
  ]
})
export class PagesModule { }
