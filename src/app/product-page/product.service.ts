import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { productsData } from './products.data';

export interface Products {
  id: string;
  title: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsArr: Products[] = [];
  productsChanges = new Subject<Products[]>();
  gridType = new BehaviorSubject<string>('grid-column-four product-container');

  constructor() {
    this.productsArr = [...productsData];
  }

  getProducts(): Products[] {
    return this.productsArr.slice();
  }

  sortProduct(sortType: string): void {
    const sortedProduct = [...this.productsArr];
    if (sortType === 'high-low') {
      sortedProduct.sort((a, b) => {
        return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
      });
      this.productsChanges.next(sortedProduct);
    } else if (sortType === 'low-high') {
      sortedProduct.sort((a, b) => {
        return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
      });
      this.productsChanges.next(sortedProduct);
    } else if (sortType === 'default') {
      this.productsChanges.next(this.productsArr);
    }
  }
}
