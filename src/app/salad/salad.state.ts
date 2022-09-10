import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
export interface SaladStateModel {
  dressing: string;
  price: number;
  toppings: string[];
}

const defaults: SaladStateModel = {
  dressing: 'ranch',
  price: 9.99,
  toppings: [],
};

@State<SaladStateModel>({
  name: 'salad',
  defaults,
})
@Injectable()
export class SaladState {}
