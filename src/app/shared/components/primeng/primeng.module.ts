import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg modules
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AccordionModule,
    AutoCompleteModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MenubarModule,
    PanelModule,
    TableModule,
    BreadcrumbModule,
    DropdownModule
  ],
  exports: [
    AccordionModule,
    AutoCompleteModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MenubarModule,
    PanelModule,
    TableModule,
    BreadcrumbModule,
    DropdownModule
  ]
})
export class PrimengModule { }
