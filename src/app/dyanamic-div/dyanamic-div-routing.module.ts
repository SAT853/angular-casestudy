import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DyanamicDivComponent } from './dyanamic-div.component';

const routes: Routes = [{ path: '', component: DyanamicDivComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DyanamicDivRoutingModule { }
