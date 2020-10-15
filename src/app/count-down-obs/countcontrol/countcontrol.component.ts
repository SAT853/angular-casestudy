import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-countcontrol',
  templateUrl: './countcontrol.component.html',
  styleUrls: ['./countcontrol.component.css'],
})
export class CountcontrolComponent implements OnInit, OnDestroy {
  @ViewChild('f') countForm: NgForm;
  count: number = null;
  pausedAt: number[];
  subscription: Subscription;
  statusSub: Subscription;
  inputCount: number;

  constructor(private dataSer: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataSer.countLogs.subscribe((data) => {
      this.pausedAt = data.pausedAt;
    });

    this.dataSer.data.subscribe((data) => {
      this.count = data.val;

      console.log(this.count);
    });
  }

  onStart(inputCount: HTMLInputElement): void {
    this.inputCount = +inputCount.value;
    if (this.inputCount <= 0 && !this.count) {
      return alert('please enter valid timer limit');
    }
    this.dataSer.startCount(this.inputCount);
  }

  onReset(): void {
    this.dataSer.resetCounter();
    this.countForm.reset();
    this.count = null;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
