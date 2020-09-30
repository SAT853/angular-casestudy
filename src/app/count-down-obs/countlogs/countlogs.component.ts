import { DataService } from './../data.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-countlogs',
  templateUrl: './countlogs.component.html',
  styleUrls: ['./countlogs.component.css'],
})
export class CountlogsComponent implements OnInit {
  startPauseStatus;
  constructor(private dataSer: DataService) {
    this.dataSer.countLogs.subscribe((data) => {
      console.log(data);
      this.startPauseStatus = data.startPauseStatus;
    });
  }

  ngOnInit(): void {}
}
