import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  startedCount = 0;
  pausedCount = 0;
  pausedAt: number[] = [];
  startPauseStatus: any[] = [];

  constructor() {}

  // tslint:disable-next-line: variable-name
  private _mySubj: Subject<{ [k: string]: any }> = new Subject<{
    [k: string]: any;
  }>();
  public data: Observable<{ [k: string]: any }> = this._mySubj.asObservable();

  private statusSub: Subject<{ [k: string]: any }> = new Subject<{
    [k: string]: any;
  }>();

  public countLogs: Observable<{
    [k: string]: any;
  }> = this.statusSub.asObservable();

  // tslint:disable-next-line: variable-name
  private _interval;
  count = 0;
  isCounterStarted = false;

  startCount(inputCount: number): void {
    if (!this.count) {
      this.count = inputCount;
      this._mySubj.next({ val: this.count });
    }
    if (!this.isCounterStarted) {
      this.isCounterStarted = true;
      this._interval = setInterval(() => {
        this.count--;
        this._mySubj.next({ val: this.count });
      }, 1000);
      this.startedCount++;
      this.startPauseStatus.push({
        status: 'Started',
        timeStamp: Date.now(),
      });
      this.statusSub.next({
        startedCount: this.startedCount,
        pausedCount: this.pausedCount,
        pausedAt: this.pausedAt,
        startPauseStatus: this.startPauseStatus,
      });
    } else {
      this.isCounterStarted = false;
      clearInterval(this._interval);
      this.pausedCount++;
      this.startPauseStatus.push({
        status: 'Paused',
        timeStamp: Date.now(),
      });
      this.pausedAt.push(this.count);
      this.statusSub.next({
        startedCount: this.startedCount,
        pausedCount: this.pausedCount,
        pausedAt: this.pausedAt,
        startPauseStatus: this.startPauseStatus,
      });
    }
  }

  resetCounter(): void {
    clearInterval(this._interval);
    this.isCounterStarted = false;
    this.count = 0;
    this._mySubj.next({ val: 0 });
    this.startPauseStatus = [];
    this.pausedAt = [];
    this.startedCount = 0;
    this.pausedCount = 0;
    this.statusSub.next({
      startedCount: this.startedCount,
      pausedCount: this.pausedCount,
      pausedAt: this.pausedAt,
      startPauseStatus: this.startPauseStatus,
    });
  }
}
