import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// Servicios
import { IngresosService } from './../services/ingresos.service';

interface City {
  name: string;
  code: string;
  inactive: boolean;
}
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  public cities: City[];
  public ingresos$: Observable<any[]> | undefined;
  public ingresos: any[] = [];
  public selectedCity: any;

  public cars = [] = [
    {
      vin: 'vin',
      year: '1990-02-10',
      brand: 'mercedes',
      color: 'yellow'
    },
    {
      vin: 'vin',
      year: '1990-02-10',
      brand: 'mercedes',
      color: 'yellow'
    },
    {
      vin: 'vin',
      year: '1990-02-10',
      brand: 'mercedes',
      color: 'yellow'
    },  {
      vin: 'vin',
      year: '1990-02-10',
      brand: 'mercedes',
      color: 'yellow'
    }
  ];
  constructor(private  ingresoServices: IngresosService) {
    this.cities = [
      {name: '--Seleccione--', code: 'none', inactive: true},
      {name: 'Fijo', code: 'fj', inactive: false},
      {name: 'Variable', code: 'vr', inactive: false},
  ];
   }


  ngOnInit(): void {
    this.getIngresos();
  }

  private getIngresos(): void {
    this.ingresoServices.getIngresos().subscribe(
      ingresos => {
        console.log(ingresos);
        this.ingresos = ingresos;
      }
    );
  }

}
