import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent implements OnInit, DoCheck {
  count: number;
  interval;
  isCountStarted = false;
  startedCount = 0;
  pauseCount = 0;
  pausedAt: number[] = [];
  startPauseStatus = [];
  isCountLimitReched = false;
  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.isCountStarted && this.count <= 0) {
      alert('timer limit reached!');
      this.resetCount();
    }
  }
  startCount(inputCount: HTMLInputElement): void {
    if (!+inputCount.value) {
      return alert('please enter valid timer limit');
    }

    if (!this.isCountStarted) {
      if (!this.count) {
        this.count = +inputCount.value;
      }
      this.interval = setInterval(() => {
        this.count--;
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
    this.count = 0;
    this.isCountStarted = false;
    clearInterval(this.interval);
    this.pauseCount = 0;
    this.startedCount = 0;
    this.startPauseStatus = [];
    this.pausedAt = [];
  }
}
