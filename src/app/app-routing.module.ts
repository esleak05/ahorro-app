import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes personalizados.


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'ahorro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
