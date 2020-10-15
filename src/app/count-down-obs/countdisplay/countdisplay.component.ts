import { Subscription } from 'rxjs';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdisplay',
  templateUrl: './countdisplay.component.html',
  styleUrls: ['./countdisplay.component.css'],
})
export class CountdisplayComponent implements OnInit, OnDestroy {
  count: number;
  subscription: Subscription;
  constructor(private dataSer: DataService) {
    this.dataSer.resetCounter();
  }

  ngOnInit(): void {
    this.subscription = this.dataSer.mySubj.subscribe((data: number) => {
      this.count = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
