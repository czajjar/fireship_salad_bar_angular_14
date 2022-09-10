import { Action, State, StateContext } from '@ngxs/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

// Action
export class Navigate {
  static readonly type = '[router] navigate';
  constructor(public payload: string) {}
}

@State<string>({
  name: 'router',
  defaults: '',
})
@Injectable() // since we are using Ivy @Injectable is required
export class RouterState {
  constructor(private router: Router) {}

  @Action(Navigate)
  async changeRoute(stateContext: StateContext<string>, action: Navigate) {
    const path = action.payload;
    await this.router.navigate([path]);
    stateContext.setState(path);
  }
}
