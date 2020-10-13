import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-image',
  templateUrl: './floating-image.component.html',
  styleUrls: ['./floating-image.component.css'],
})
export class FloatingImageComponent implements OnInit {
  diVCount = 8;

  divArray = [];

  title = 'A floating banner text which keeps on rottin';
  constructor() {}

  ngOnInit(): void {}
}
