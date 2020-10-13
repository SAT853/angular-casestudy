import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-count-control',
  templateUrl: './count-control.component.html',
  styleUrls: ['./count-control.component.css'],
})
export class CountControlComponent implements OnInit {
  @Output() resetCountEle = new EventEmitter();
  @Output() startCountEle = new EventEmitter();
  @Input() pausedAt: number[];
  inputcount: number;
  constructor() {}

  ngOnInit(): void {}

  onStart(inputCount: HTMLInputElement): void {
    this.inputcount = +inputCount.value;
    if (this.inputcount <= 0) {
      return alert('please enter valid timer limit');
    }
    this.startCountEle.emit(this.inputcount);
  }

  onReset(): void {
    this.resetCountEle.emit();
  }
}
