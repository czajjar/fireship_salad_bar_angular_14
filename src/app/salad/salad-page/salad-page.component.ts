import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { StartOver } from '../salad.actions';
import { SaladState, SaladStateModel } from '../salad.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-salad-page',
  templateUrl: './salad-page.component.html',
  styleUrls: ['./salad-page.component.css'],
})
export class SaladPageComponent {
  constructor(private store: Store) {}

  @Select() salad$: Observable<SaladStateModel> | undefined;

  @Select(SaladState.price) price$: Observable<number> | undefined;
  @Select(SaladState.getDressing) dressing$: Observable<string> | undefined;

  startOver() {
    this.store.dispatch(new StartOver());
  }
}
