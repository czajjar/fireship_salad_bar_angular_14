import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class OrderService {
  post() {
    return of(Math.random() >= 0.5).pipe(delay(2000));
  }
}
