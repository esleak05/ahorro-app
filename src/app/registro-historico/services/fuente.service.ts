import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuenteService {

  // private url = `https://ahorro-app-d1999-default-rtdb.firebaseio.com`;
  private url = ``;

  constructor(private httpClient: HttpClient) { }

  getFuentes(): Observable<any> {
    return this.httpClient.get(`${this.url}/fuentes.json`).pipe(
      tap(console.log)
    )
  }
}
