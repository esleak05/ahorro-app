// Modulos core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos personalizados.
import { ComponentsModule } from './../components/components.module';

// componentes personalzados.
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [BreadcrumbsComponent, HeaderComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
