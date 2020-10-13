import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountDownRoutingModule } from './count-down-routing.module';
import { CountDownComponent } from './count-down.component';
import { CountDisplayComponent } from './count-display/count-display.component';
import { CountControlComponent } from './count-control/count-control.component';
import { CountClicklogsComponent } from './count-clicklogs/count-clicklogs.component';
import { CountLogsComponent } from './count-logs/count-logs.component';

@NgModule({
  declarations: [
    CountDownComponent,
    CountDisplayComponent,
    CountControlComponent,
    CountClicklogsComponent,
    CountLogsComponent,
  ],
  imports: [CommonModule, CountDownRoutingModule, FormsModule],
})
export class CountDownModule {}
