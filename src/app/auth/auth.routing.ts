import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes personalizados

export const routes: Routes = [
   {path: 'auth',
    children: [
      {path: 'login', component: LoginComponent },
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

