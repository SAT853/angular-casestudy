import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentDataComponent } from './student-data.component';

const routes: Routes = [{ path: '', component: StudentDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentDataRoutingModule { }
