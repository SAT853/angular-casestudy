import { DataService } from './data.service';
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-count-down-obs',
  templateUrl: './count-down-obs.component.html',
  styleUrls: ['./count-down-obs.component.css'],
})
export class CountDownObsComponent implements OnInit, DoCheck {
  count: number;

  constructor(private dataSer: DataService) {}

  ngOnInit(): void {
    this.dataSer.data.subscribe((data) => {
      this.count = data.val;
    });
  }

  ngDoCheck(): void {
    if (this.count < 0) {
      alert('timer limit reached!');
      this.dataSer.resetCounter();
    }
  }
}
