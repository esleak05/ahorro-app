import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { PreferenciaComponent } from './pages/preferencia/preferencia.component';
import { CuentaComponent } from './pages/cuenta.component';



@NgModule({
  declarations: [ConfiguracionComponent, PreferenciaComponent, CuentaComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CuentaModule { }
