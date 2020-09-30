import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloatingImageComponent } from './floating-image.component';

const routes: Routes = [{ path: '', component: FloatingImageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloatingImageRoutingModule { }
