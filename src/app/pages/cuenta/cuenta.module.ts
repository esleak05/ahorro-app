// Modulos core.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos personalizados
import { ComponentsModule } from './../../components/components.module';
import { SharedModule } from './../../shared/shared.module';

// Componentes personalizados.
import { CuentaComponent } from './cuenta.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { PreferenciasComponent } from './preferencias/preferencias.component';



@NgModule({
  declarations: [CuentaComponent, ConfiguracionComponent, PreferenciasComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ]
})
export class CuentaModule { }
