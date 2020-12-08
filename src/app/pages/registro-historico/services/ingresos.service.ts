import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Ingreso } from '../models/ingreso';
@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  private url = `https://ahorro-app-d1999-default-rtdb.firebaseio.com`;

  constructor(private httpClient: HttpClient) { }

  getIngresos(): Observable<any>{
    return this.httpClient.get(`${this.url}/ingresos.json`).pipe(
      map(this.crearArregloIngreso)
    );
  }

  crearArregloIngreso(ingresosObj: any): any[]{

    const ingresos: Ingreso[] = [];

    if (ingresosObj === null) {return []; }

    Object.keys(ingresosObj).forEach(key => {

       const ingreso = new Ingreso(ingresosObj[key]);
       ingreso.id = key;

       ingresos.push(ingreso);

    });

    return ingresos;
  }
}
