import { MainLayoutComponent } from './../layout/main-layout/main-layout.component';
import { MensualesComponent } from './pages/mensuales/mensuales.component';
import { DiariasComponent } from './pages/diarias/diarias.component';
import { AnualesComponent } from './pages/anuales/anuales.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'seguimiento-metas',
  component: MainLayoutComponent,
  children: [
    {path: 'anuales', component: AnualesComponent},
    {path: 'diarias', component: DiariasComponent},
    {path: 'mensuales', component: MensualesComponent}
  ]
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguimientoMetasRoutingModule { }
