import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules personalizados
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimeNgModule

  ],
  exports: [
    PrimeNgModule
  ]
})
export class ComponentsModule { }
