import { Injectable } from '@angular/core';
import { Car } from './cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Car[] = [
    new Car('car1', 2002, 'bmw', 'm3', 'red', 'https://en.wikipedia.org/wiki/BMW_M3'),
    new Car('car2', 2017, 'acura', 'nsx', 'green', 'https://en.wikipedia.org/wiki/Honda_NSW'),
    new Car('car3', 2016, 'chevy', 'camaro', 'blue', 'https://en.wikipedia.org/wiki/Chevrolet_Camaro')
  ];

  constructor() { }
}
