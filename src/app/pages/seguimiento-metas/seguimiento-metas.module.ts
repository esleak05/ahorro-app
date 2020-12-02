// Modulos core.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos personalizados
import { SharedModule } from './../../shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';

// Componentes personalizados-
import { SeguimientoMetasComponent } from './seguimiento-metas.component';
import { DiariasComponent } from './diarias/diarias.component';
import { SemanalesComponent } from './semanales/semanales.component';
import { AnualesComponent } from './anuales/anuales.component';



@NgModule({
  declarations: [SeguimientoMetasComponent, DiariasComponent, SemanalesComponent, AnualesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
  ],
})
export class SeguimientoMetasModule { }
