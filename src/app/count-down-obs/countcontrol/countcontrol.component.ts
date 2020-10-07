import { Subscription } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countcontrol',
  templateUrl: './countcontrol.component.html',
  styleUrls: ['./countcontrol.component.css'],
})
export class CountcontrolComponent implements OnInit, OnDestroy {
  pausedAt: number[];
  inputCount: number;
  subscription: Subscription;

  constructor(private dataSer: DataService) {
    this.subscription = this.dataSer.countLogs.subscribe((data) => {
      this.pausedAt = data.pausedAt;
    });
  }

  ngOnInit(): void {}

  onStart(): void {
    if (!this.inputCount) {
      return alert('please enter valid timer limit!');
    }
    this.dataSer.startCount(this.inputCount);
  }

  onReset(): void {
    this.dataSer.resetCounter();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
