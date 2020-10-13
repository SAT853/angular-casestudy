import { productsData } from './products.data';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

export interface Products {
  id: string;
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  gridType = 'grid-column-four product-container';
  products: Products[] = [];
  constructor() {}

  ngOnInit(): void {
    this.products = [...productsData];
  }

  onGridTwo(): void {
    this.gridType = 'grid-column-two product-container';
  }

  onGridFour(): void {
    this.gridType = 'grid-column-four product-container';
  }

  onSelect(sortType: string): void {
    if (sortType === 'high') {
      this.products.sort((a, b) => {
        return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
      });
    }
    if (sortType === 'low') {
      this.products.sort((a, b) => {
        return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
      });
    }
  }
}
