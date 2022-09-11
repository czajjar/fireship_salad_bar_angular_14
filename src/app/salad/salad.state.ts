import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddTopping, RemoveLastTopping, StartOver } from './salad.actions';
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

  @Selector()
  static lastAddedTopping(state: SaladStateModel) {
    return state.toppings[state.toppings.length - 1];
  }

  @Action(AddTopping)
  addTopping(context: StateContext<SaladStateModel>, action: AddTopping) {
    const current = context.getState();

    const toppings = [...current.toppings, action.payload];
    context.patchState({
      toppings,
      price: current.price + 0.5,
    });
  }

  @Action(RemoveLastTopping)
  removeLastTopping(context: StateContext<SaladStateModel>) {
    const current = context.getState();
    let currentToppings = current.toppings;
    if (currentToppings.length > 1) {
      currentToppings.splice(-1, 1);
    } else {
      currentToppings = [];
    }
    context.setState({
      toppings: [...currentToppings],
      price: current.price - 0.5,
      dressing: current.dressing,
    });
  }
  @Action(StartOver)
  reset({ setState }: StateContext<SaladStateModel>) {
    setState({ ...defaults });
  }
}
