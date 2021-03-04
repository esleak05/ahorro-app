import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ingreso } from '../interfaces/ingreso';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {


  // private url = `https://ahorro-app-d1999-default-rtdb.firebaseio.com`;
  private url = `http://localhost:59268/api/ingreso`

  constructor(private httpClient: HttpClient) { }

  getIngresos(): Observable<any>{
    return this.httpClient.get(this.url).pipe(
      map(this.crearArregloIngreso)
    );
  }

  crearArregloIngreso(ingresosObj: any): any[]{

    console.log(ingresosObj);

    const ingresos: Ingreso[] = [];

    if (ingresosObj === null) {return []; }

    Object.keys(ingresosObj).forEach(key => {

       const ingreso: Ingreso = ingresosObj[key];
       ingreso.id = key;

       ingresos.push(ingreso);

    });

    return ingresos;
  }
}
