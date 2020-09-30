import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicklogs',
  templateUrl: './clicklogs.component.html',
  styleUrls: ['./clicklogs.component.css'],
})
export class ClicklogsComponent implements OnInit {
  startedCount;
  pausedCount;

  constructor(private dataSer: DataService) {}

  ngOnInit(): void {
    this.startedCount = this.dataSer.countLogs.subscribe((data) => {
      this.startedCount = data.startedCount;
      this.pausedCount = data.pausedCount;
    });
  }
}
