import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { RouterState } from './shared/router.state';
import { AppState } from './shared/app.state';
import { OrderService } from './order.service';
import { FormsModule } from '@angular/forms';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([RouterState, AppState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [OrderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
