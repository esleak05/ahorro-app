// Core
import { Route } from '@angular/router';


// Componentes personalizados
import { AnualesComponent } from './anuales/anuales.component';
import { SemanalesComponent } from './semanales/semanales.component';
import { DiariasComponent } from './diarias/diarias.component';

export const routesSeguimientoMetas: Route =
  {path: 'seguimiento-metas',
   children: [
     {path: 'diarias', component: DiariasComponent},
     {path: 'semanales', component: SemanalesComponent},
     {path: 'anuales', component: AnualesComponent}
]};

