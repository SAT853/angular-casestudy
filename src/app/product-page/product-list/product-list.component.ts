import { Products } from './../product-page.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() gridType: string;
  @Input() products: Products[];

  constructor() {}

  ngOnInit(): void {}
}
