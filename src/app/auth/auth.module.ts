import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modulos personalizados
import { AuthRoutingModule } from './auth.routing';
import { ComponentsModule } from './../components/components.module';

// Componentes personalizados
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ComponentsModule
  ]
})
export class AuthModule { }
