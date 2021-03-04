import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { EgresoComponent } from './pages/egreso/egreso.component';
import { PresupuestoComponent } from './pages/presupuesto/presupuesto.component';
import { RegistroHistoricoComponent } from './pages/registro-historico.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [IngresoComponent,
                 EgresoComponent,
                 PresupuestoComponent,
                 RegistroHistoricoComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RegistroHistoricoModule { }
