import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { StartOver } from './salad.actions';
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
export class SaladState {
  @Selector()
  static price(state: SaladStateModel) {
    return state.price;
  }
  @Selector()
  static getDressing(state: SaladStateModel) {
    return state.dressing;
  }
  @Selector()
  static toppings(state: SaladStateModel) {
    return state.toppings;
  }

  @Action(StartOver)
  reset({ setState }: StateContext<SaladStateModel>) {
    setState({ ...defaults });
  }
}
