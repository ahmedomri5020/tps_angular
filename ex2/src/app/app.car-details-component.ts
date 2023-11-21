import { Component, Input } from '@angular/core';
import { Car } from './cars';

@Component({
  selector: 'app-car-details',
  templateUrl: './app.car-details.component.html',
  styleUrls: ['./app.component.scss']
})
export class CarDetailsComponent {
  @Input() car!: Car;

  constructor() {}
}
