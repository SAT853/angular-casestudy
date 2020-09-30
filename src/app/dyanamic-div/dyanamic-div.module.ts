import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DyanamicDivRoutingModule } from './dyanamic-div-routing.module';
import { DyanamicDivComponent } from './dyanamic-div.component';


@NgModule({
  declarations: [DyanamicDivComponent],
  imports: [
    CommonModule,
    DyanamicDivRoutingModule
  ]
})
export class DyanamicDivModule { }
