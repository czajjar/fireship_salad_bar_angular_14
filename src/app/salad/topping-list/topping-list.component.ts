import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AddTopping, RemoveLastTopping } from '../salad.actions';
import { SaladState } from '../salad.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.css'],
})
export class ToppingListComponent {
  choices = [
    'Olives',
    'Tomatoes',
    'Croutons',
    'Pickles',
    'Shrimp',
    'Pepitas',
    'Carrots',
  ];

  @Select(SaladState.toppings) toppings$: Observable<string[]> | undefined;
  @Select(SaladState.lastAddedTopping) lastAddedTopping$:
    | Observable<string>
    | undefined;

  constructor(private store: Store) {}

  add(name: string) {
    this.store.dispatch(new AddTopping(name));
  }
  removeLast() {
    this.store.dispatch(new RemoveLastTopping());
  }
}
