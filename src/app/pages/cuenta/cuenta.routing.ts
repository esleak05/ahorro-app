// Core
import { Route } from '@angular/router';


// Componentes personalizados
import { PreferenciasComponent } from './preferencias/preferencias.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

export const routesCuenta: Route =
  {path: 'cuenta',
   children: [
     {path: 'configuracion', component: ConfiguracionComponent},
     {path: 'preferencias', component: PreferenciasComponent},
]};

