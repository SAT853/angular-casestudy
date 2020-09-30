import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDataRoutingModule } from './student-data-routing.module';
import { StudentDataComponent } from './student-data.component';
import { KeysPipe } from './keys.pipe';


@NgModule({
  declarations: [StudentDataComponent, KeysPipe],
  imports: [
    CommonModule,
    StudentDataRoutingModule
  ]
})
export class StudentDataModule { }
