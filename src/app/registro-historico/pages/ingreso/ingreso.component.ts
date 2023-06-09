
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FuenteService } from '../../services/fuente.service';
import { IngresoService } from '../../services/ingreso.service';
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
  constructor(private ingresoService: IngresoService)
               {
    this.cities = [
      {name: '--Seleccione--', code: 'none', inactive: true},
      {name: 'Fijo', code: 'fj', inactive: false},
      {name: 'Variable', code: 'vr', inactive: false},
  ];
   }


  ngOnInit(): void {
    this.getIngresos();
    // this.getFuentes();
  }

  private getIngresos(): void {
    this.ingresoService.getIngresos().subscribe(
      (ingresos: any) => {
        console.log(ingresos);
        this.ingresos = ingresos;
      }
    );
  }

  // private getFuentes(): void {
  //   this.fuentesServices.getFuentes().subscribe(
  //     (fuentes: any) => console.log(fuentes)
  //   )
  // }

}
