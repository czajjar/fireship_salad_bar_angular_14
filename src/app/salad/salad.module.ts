import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaladPageComponent } from './salad-page/salad-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { SaladState } from './salad.state';

const routes: Routes = [{ path: 'order', component: SaladPageComponent }];

@NgModule({
  declarations: [SaladPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([SaladState]),
  ],
})
export class SaladModule {}
