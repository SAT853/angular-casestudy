import { Subscription } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countlogs',
  templateUrl: './countlogs.component.html',
  styleUrls: ['./countlogs.component.css'],
})
export class CountlogsComponent implements OnInit, OnDestroy {
  startPauseStatus: any[];
  subscription: Subscription;

  constructor(private dataSer: DataService) {
    this.subscription = this.dataSer.statusSub.subscribe((data) => {
      this.startPauseStatus = data.startPauseStatus;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
