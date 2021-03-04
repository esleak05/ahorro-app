import { MainLayoutComponent } from './../layout/main-layout/main-layout.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { PreferenciaComponent } from './pages/preferencia/preferencia.component';

const routes: Routes = [{
  path: 'cuenta',
  component: MainLayoutComponent,
  children: [
    {path: 'configuracion', component: ConfiguracionComponent},
    {path: 'preferencia', component: PreferenciaComponent},

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentaRoutingModule { }
