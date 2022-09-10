import { Action, Selector, State, StateContext } from '@ngxs/store';
import { OrderService } from 'src/app/order.service';
import {
  ConfirmOrder,
  OrderFailed,
  OrderSuccess,
  SetUsername,
} from './app.actions';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';

export interface AppStateModel {
  username: string;
  orderId: number;
  status?: 'pending' | 'confirmed' | 'declined';
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    username: '',
    orderId: Math.floor(Math.random() * 23000),
  },
})
@Injectable() // since we are using Ivy @Injectable is required
export class AppState {
  constructor(private orderService: OrderService) {}

  @Selector()
  static app(state: AppStateModel) {
    return state;
  }

  @Action(SetUsername)
  setUsername(
    stateContext: StateContext<AppStateModel>,
    { payload }: SetUsername
  ) {
    stateContext.patchState({ username: payload });
  }

  @Action(ConfirmOrder, { cancelUncompleted: true })
  confirmOrder(stateContext: StateContext<AppStateModel>) {
    stateContext.patchState({ status: 'pending' });

    return this.orderService
      .post()
      .pipe(
        tap((success: boolean) =>
          success
            ? stateContext.dispatch(OrderSuccess)
            : stateContext.dispatch(OrderFailed)
        )
      );
  }

  @Action(OrderSuccess)
  orderSuccess({ patchState }: StateContext<AppStateModel>) {
    patchState({ status: 'confirmed' });
  }

  @Action(OrderFailed)
  orderFailed({ patchState }: StateContext<AppStateModel>) {
    patchState({ status: 'declined' });
  }
}
