import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountDownComponent } from './count-down.component';

const routes: Routes = [{ path: '', component: CountDownComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountDownRoutingModule {}
