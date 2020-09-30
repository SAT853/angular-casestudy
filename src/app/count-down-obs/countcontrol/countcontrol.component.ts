import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countcontrol',
  templateUrl: './countcontrol.component.html',
  styleUrls: ['./countcontrol.component.css'],
})
export class CountcontrolComponent implements OnInit {
  pausedAt: number[];
  inputCount: number;

  constructor(private dataSer: DataService) {
    this.dataSer.countLogs.subscribe((data) => {
      this.pausedAt = data.pausedAt;
    });
  }

  ngOnInit(): void {}

  onStart(): void {
    if (!this.inputCount) {
      return alert('please valid timer limit');
    }

    this.dataSer.startCount(this.inputCount);
  }

  onReset(): void {
    this.dataSer.resetCounter();
  }
}
