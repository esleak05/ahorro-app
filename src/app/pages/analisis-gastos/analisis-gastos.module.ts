import { AnalisisGastosComponent } from './analisis-gastos.component';
// Modulos core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos personalizados.
import { SharedModule } from './../../shared/shared.module';
import { ComponentsModule } from './../../components/components.module';


// Componentes personalizados
import { TrabajoComponent } from './trabajo/trabajo.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { SalidasComponent } from './salidas/salidas.component';

@NgModule({
  declarations: [AnalisisGastosComponent, TrabajoComponent, CuentasComponent, SalidasComponent],
  imports: [CommonModule,
            SharedModule,
            ComponentsModule,
            ],
   exports: []
})
export class AnalisisGastosModule {}
