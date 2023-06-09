import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Registro',
        icon: 'pi pi-fw pi-book',
        items: [
          {
            label: 'Ingresos',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['/registro/ingreso'],
          },
          {
            separator: true,
          },
          {
            label: 'Egresos',
            icon: 'pi pi-fw pi-minus',
            routerLink: ['/registro/egreso'],
          },
          {
            separator: true,
          },
          {
            label: 'Presupuesto',
            icon: 'pi pi-fw pi-percentage',
            routerLink: ['/registro/presupuesto'],
          },
        ],
      },
      {
        label: 'Análisis de gastos',
        icon: 'pi pi-fw pi-wallet',
        items: [
          {
            label: 'Trabajo',
            icon: 'pi pi-fw pi-briefcase',
            routerLink: ['/analisis-gastos/trabajo'],
          },
          {
            label: 'Cuentas',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['/analisis-gastos/cuentas'],
          },
          {
            label: 'Salidas',
            icon: 'pi pi-fw pi-map-marker',
            routerLink: ['/analisis-gastos/salidas'],
          },
        ],
      },
      {
        label: 'Control diario',
        icon: 'pi pi-fw pi-shield',
        items: [
          {
            label: 'Presupuestos',
            icon: 'pi pi-fw pi-percentage',
            routerLink: ['/control-diario/presupuestos'],
          },
          {
            label: 'Cuentas',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['/control-diario/cuentas'],
          },
        ],
      },
      {
        label: 'Seguimientos de metas',
        icon: 'pi pi-fw pi-eye',
        items: [
          {
            label: 'Diarias',
            icon: 'pi pi-fw pi-calendar-times',
            routerLink: ['/seguimiento-metas/diarias'],
          },
          {
            label: 'Semanales',
            icon: 'pi pi-fw pi-calendar-plus',
            routerLink: ['/seguimiento-metas/semanales'],
          },
          {
            label: 'Anuales',
            icon: 'pi pi-fw pi-calendar',
            routerLink: ['/seguimiento-metas/anuales'],
          },
        ],
      },
      {
        label: 'Cuenta',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Configuración',
            icon: 'pi pi-fw pi-cog',
            routerLink: ['/cuenta/configuracion'],
          },
          {
            label: 'Preferencias de visualización',
            icon: 'pi pi-fw pi-moon',
            routerLink: ['/cuenta/preferencias'],
          },
          {
            label: 'Cerrar sesión',
            icon: 'pi pi-fw pi-sign-out',
            routerLink: ['/auth/login'],
          },
        ],
      },
    ];
  }
}
