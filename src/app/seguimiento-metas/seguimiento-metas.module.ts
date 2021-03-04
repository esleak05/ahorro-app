import { SeguimientoMetasComponent } from './pages/seguimiento-metas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguimientoMetasRoutingModule } from './seguimiento-metas-routing.module';
import { AnualesComponent } from './pages/anuales/anuales.component';



@NgModule({
  declarations: [SeguimientoMetasComponent, AnualesComponent],
  imports: [
    CommonModule,
    SeguimientoMetasRoutingModule
  ]
})
export class SeguimientoMetasModule { }
