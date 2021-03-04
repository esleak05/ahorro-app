import { LoginLayoutComponent } from './../layout/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';

// Componentes personalizados

export const routes: Routes = [
   {path: 'auth',
    component: LoginLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'registro', component: RegistroComponent  },
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

