import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountDownObsComponent } from './count-down-obs.component';

const routes: Routes = [{ path: '', component: CountDownObsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountDownObsRoutingModule { }
