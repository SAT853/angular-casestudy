import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface CountLogs {
  startedCount: number;
  pausedCount: number;
  pausedAt: number[];
  startPauseStatus: any[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private interval: any;
  count = null;
  isCounterStarted = false;
  startedCount = 0;
  pausedCount = 0;
  pausedAt: number[] = [];
  startPauseStatus: any[] = [];

  constructor() {}
  // Subjects
  mySubj: Subject<number> = new Subject<number>();
  statusSub: Subject<CountLogs> = new Subject<CountLogs>();

  startCount(inputCount: number): void {
    if (this.count === null) {
      this.count = inputCount;
      this.mySubj.next(this.count);
    }
    if (!this.isCounterStarted) {
      this.isCounterStarted = true;
      this.interval = setInterval(() => {
        if (this.count === 1) {
          this.resetCounter();
          alert('timer limit reached!');
        } else {
          this.count--;
          this.mySubj.next(this.count);
        }
      }, 1000);
      this.startedCount++;
      this.startPauseStatus.push({
        status: 'Started',
        timeStamp: Date.now(),
      });

      // Pass Data to Component
      this.statusSub.next({
        startedCount: this.startedCount,
        pausedCount: this.pausedCount,
        pausedAt: this.pausedAt,
        startPauseStatus: this.startPauseStatus,
      });
    } else {
      clearInterval(this.interval);
      this.isCounterStarted = false;
      this.pausedCount++;
      this.startPauseStatus.push({
        status: 'Paused',
        timeStamp: Date.now(),
      });
      this.pausedAt.push(this.count);

      // Pass Data to Component
      this.statusSub.next({
        startedCount: this.startedCount,
        pausedCount: this.pausedCount,
        pausedAt: this.pausedAt,
        startPauseStatus: this.startPauseStatus,
      });
    }
  }

  resetCounter(): void {
    this.isCounterStarted = false;
    clearInterval(this.interval);
    // Reset value to default

    this.count = null;
    this.startPauseStatus = [];
    this.pausedAt = [];
    this.startedCount = 0;
    this.pausedCount = 0;

    // Pass data to component
    this.mySubj.next(this.count);
    this.statusSub.next({
      startedCount: this.startedCount,
      pausedCount: this.pausedCount,
      pausedAt: this.pausedAt,
      startPauseStatus: this.startPauseStatus,
    });
  }
}
