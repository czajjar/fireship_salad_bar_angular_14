import { Component } from '@angular/core';

import { AppState, AppStateModel } from './shared/app.state';
import { Select, Store } from '@ngxs/store';
import { ConfirmOrder, SetUsername } from './shared/app.actions';
import { Navigate } from './shared/router.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Selects state named 'app' automagically by parsing 'app$' class member name.
  @Select(AppState) app$: Observable<AppStateModel> | undefined;
  // Examples of how it can be done differently using static 'app' @Selector defined in AppState
  // @Select((state) => state.app) app$: | Observable<AppStateModel> | undefined;
  // or
  // @Select(AppState.app) app$: Observable<AppStateModel> | undefined;

  username: string = '';

  constructor(private store: Store) {}

  clickHandler(username: string) {
    console.log(username);
    this.store.dispatch([
      new SetUsername(username),
      new Navigate('salad/order'),
    ]);
  }

  confirm() {
    this.store.dispatch(ConfirmOrder);
  }

  logState(state: any) {
    console.log(state);
  }
}
