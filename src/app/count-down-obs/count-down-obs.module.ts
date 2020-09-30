import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountDownObsRoutingModule } from './count-down-obs-routing.module';
import { CountDownObsComponent } from './count-down-obs.component';


@NgModule({
  declarations: [CountDownObsComponent],
  imports: [
    CommonModule,
    CountDownObsRoutingModule
  ]
})
export class CountDownObsModule { }
