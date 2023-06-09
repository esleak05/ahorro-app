
// Modulos core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos personalizados.

import { PrimengModule } from '../shared/components/primeng/primeng.module';
import { LayoutModule } from '../shared/components/layout/layout.module'

// componentes personalzados.

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    PrimengModule
  ],
  exports: [
    LayoutModule,
    PrimengModule
  ]
})
export class SharedModule { }
