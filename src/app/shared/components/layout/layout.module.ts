import { PrimengModule } from './../primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './main-layout/header/header.component';
import { BreadcrumbsComponent } from './main-layout/breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [HeaderComponent, BreadcrumbsComponent],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    HeaderComponent, BreadcrumbsComponent
  ]
})
export class LayoutModule { }
