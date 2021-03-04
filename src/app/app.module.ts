import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RegistroHistoricoModule } from './registro-historico/registro-historico.module';
// modulos core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// modulos personalizados.
import { AuthModule } from './auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RegistroHistoricoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
