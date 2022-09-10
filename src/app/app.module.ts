import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { RouterState } from './shared/router.state';
import { AppState } from './shared/app.state';
import { OrderService } from './order.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([RouterState, AppState]),
    FormsModule,
  ],
  providers: [OrderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
