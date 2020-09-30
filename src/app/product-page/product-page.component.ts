import { productsData } from './products.data';
import { Component, OnInit } from '@angular/core';

interface Products {
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

  onSelect(e: any): void {
    if (e.target.value === 'high') {
      this.products.sort((a, b) => {
        return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
      });
    }
    if (e.target.value === 'low') {
      this.products.sort((a, b) => {
        return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
      });
    }
  }
}
