import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdisplay',
  templateUrl: './countdisplay.component.html',
  styleUrls: ['./countdisplay.component.css'],
})
export class CountdisplayComponent implements OnInit, OnDestroy {
  count: number;

  constructor(private dataSer: DataService) {
    this.dataSer.resetCounter();
  }

  ngOnInit(): void {
    this.dataSer.data.subscribe((data) => {
      this.count = data.val;
    });
  }

  ngOnDestroy(): void {}
}
