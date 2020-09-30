import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountDownObsRoutingModule } from './count-down-obs-routing.module';
import { CountDownObsComponent } from './count-down-obs.component';
import { ClicklogsComponent } from './clicklogs/clicklogs.component';
import { CountlogsComponent } from './countlogs/countlogs.component';
import { CountdisplayComponent } from './countdisplay/countdisplay.component';
import { CountcontrolComponent } from './countcontrol/countcontrol.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CountDownObsComponent,
    ClicklogsComponent,
    CountlogsComponent,
    CountdisplayComponent,
    CountcontrolComponent,
  ],
  imports: [CommonModule, CountDownObsRoutingModule, FormsModule],
})
export class CountDownObsModule {}
