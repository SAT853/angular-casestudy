import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dyanamic-div',
  templateUrl: './dyanamic-div.component.html',
  styleUrls: ['./dyanamic-div.component.css'],
})
export class DyanamicDivComponent implements OnInit {
  customeDiv: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this.customeDiv = [...new Array(5)].map((item, index) => index + 1);
  }
  @HostListener('window:scroll') onScrollEvent(e: Event): void {
    const currPosition =
      window.innerHeight + document.documentElement.scrollTop;
    const endPosition = document.documentElement.scrollHeight;

    if (currPosition === endPosition) {
      this.customeDiv.push(this.customeDiv.length + 1);
    }
    if (document.documentElement.scrollTop === 0) {
      this.customeDiv.splice(5);
    }
  }

  onClick(index: number): void {
    alert(`Button ${index} is clicked!`);
  }
}
