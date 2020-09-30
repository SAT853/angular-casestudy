import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-count-constrol',
  templateUrl: './count-constrol.component.html',
  styleUrls: ['./count-constrol.component.css'],
})
export class CountConstrolComponent implements OnInit {
  @Output() resetCountEle = new EventEmitter();
  @Output() startCountEle = new EventEmitter();
  @Input() pausedAt: number[];
  constructor() {}

  ngOnInit(): void {}

  onStart(count: number): void {
    this.startCountEle.emit(count);
  }

  onReset(): void {
    this.resetCountEle.emit();
  }
}
