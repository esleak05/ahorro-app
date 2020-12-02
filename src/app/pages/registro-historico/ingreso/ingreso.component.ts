import { Component, OnInit } from '@angular/core';

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
  constructor() {
    this.cities = [
      {name: '--Seleccione--', code: 'none', inactive: true},
      {name: 'Fijo', code: 'fj', inactive: false},
      {name: 'Variable', code: 'vr', inactive: false},
  ];
   }


  ngOnInit(): void {
  }

}
