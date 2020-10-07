import { Subscription } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clicklogs',
  templateUrl: './clicklogs.component.html',
  styleUrls: ['./clicklogs.component.css'],
})
export class ClicklogsComponent implements OnInit, OnDestroy {
  startedCount: number;
  pausedCount: number;
  subscription: Subscription;

  constructor(private dataSer: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataSer.countLogs.subscribe((data) => {
      this.startedCount = data.startedCount;
      this.pausedCount = data.pausedCount;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
