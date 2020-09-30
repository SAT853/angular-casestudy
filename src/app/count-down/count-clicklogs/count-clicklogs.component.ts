import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-clicklogs',
  templateUrl: './count-clicklogs.component.html',
  styleUrls: ['./count-clicklogs.component.css'],
})
export class CountClicklogsComponent implements OnInit {
  @Input() startedCount;
  @Input() pausedCount;
  constructor() {}

  ngOnInit(): void {}
}
