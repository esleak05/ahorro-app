import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalisisGastosComponent } from './pages/analisis-gastos.component';
import { Routes, RouterModule } from '@angular/router';



@NgModule({
  declarations: [AnalisisGastosComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AnalisisGastosModule { }
