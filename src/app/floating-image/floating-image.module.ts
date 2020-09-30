import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingImageRoutingModule } from './floating-image-routing.module';
import { FloatingImageComponent } from './floating-image.component';


@NgModule({
  declarations: [FloatingImageComponent],
  imports: [
    CommonModule,
    FloatingImageRoutingModule
  ]
})
export class FloatingImageModule { }
