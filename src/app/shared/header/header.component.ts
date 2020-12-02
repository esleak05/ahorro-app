import { Component, OnInit } from '@angular/core';
// Api comun primeNG
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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
            routerLink: ['/ahorro/registro/ingreso'],
          },
          {
            separator: true,
          },
          {
            label: 'Egresos',
            icon: 'pi pi-fw pi-minus',
            routerLink: ['/ahorro/registro/egreso'],
          },
          {
            separator: true,
          },
          {
            label: 'Presupuesto',
            icon: 'pi pi-fw pi-percentage',
            routerLink: ['/ahorro/registro/presupuesto'],
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
            routerLink: ['/ahorro/analisis-gastos/trabajo'],
          },
          {
            label: 'Cuentas',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['/ahorro/analisis-gastos/cuentas'],
          },
          {
            label: 'Salidas',
            icon: 'pi pi-fw pi-map-marker',
            routerLink: ['/ahorro/analisis-gastos/salidas'],
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
            routerLink: ['/ahorro/control-diario/presupuestos'],
          },
          {
            label: 'Cuentas',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['/ahorro/control-diario/cuentas'],
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
            routerLink: ['/ahorro/seguimiento-metas/diarias'],
          },
          {
            label: 'Semanales',
            icon: 'pi pi-fw pi-calendar-plus',
            routerLink: ['/ahorro/seguimiento-metas/semanales'],
          },
          {
            label: 'Anuales',
            icon: 'pi pi-fw pi-calendar',
            routerLink: ['/ahorro/seguimiento-metas/anuales'],
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
            routerLink: ['/ahorro/cuenta/configuracion'],
          },
          {
            label: 'Preferencias de visualización',
            icon: 'pi pi-fw pi-moon',
            routerLink: ['/ahorro/cuenta/preferencias'],
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
