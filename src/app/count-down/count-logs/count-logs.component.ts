import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-logs',
  templateUrl: './count-logs.component.html',
  styleUrls: ['./count-logs.component.css'],
})
export class CountLogsComponent implements OnInit {
  @Input() startPauseStatus;
  constructor() {}

  ngOnInit(): void {}
}
