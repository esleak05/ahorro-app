import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modulos personalizados
import { AuthRoutingModule } from './auth.routing';
import { SharedModule } from './../shared/shared.module';

// Componentes personalizados

import { RegistroComponent } from './pages/registro/registro.component';
import { AuthComponent } from './pages/auth.component';



@NgModule({
  declarations: [LoginComponent, RegistroComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
