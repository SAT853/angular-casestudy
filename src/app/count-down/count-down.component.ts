import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent implements OnInit {
  count: number;
  interval: any;
  isCountStarted = false;
  startedCount = 0;
  pauseCount = 0;
  pausedAt: number[] = [];
  startPauseStatus = [];
  isCountLimitReched = false;
  constructor() {}

  ngOnInit(): void {}

  startCount(count: number): void {
    if (!this.isCountStarted) {
      if (!this.count) {
        this.count = count;
      }
      this.interval = setInterval(() => {
        if (this.count === 1) {
          alert('timer limit reached!');
          this.resetCount();
        } else {
          this.count--;
        }
      }, 1000);
      this.startedCount++;
      this.isCountStarted = true;
      this.startPauseStatus.push({
        status: 'Started',
        timeStamp: Date.now(),
      });
    } else {
      clearInterval(this.interval);
      this.isCountStarted = false;
      this.pausedAt.push(this.count);
      this.pauseCount++;
      this.startPauseStatus.push({
        status: 'Paused',
        timeStamp: Date.now(),
      });
    }
  }

  resetCount(): void {
    clearInterval(this.interval);
    this.count = null;
    this.isCountStarted = false;
    this.pauseCount = 0;
    this.startedCount = 0;
    this.startPauseStatus = [];
    this.pausedAt = [];
  }
}
