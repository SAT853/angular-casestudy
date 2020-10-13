import { Products, ProductService } from './../product.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  gridType: string;
  products: Products[];
  productSub: Subscription;
  gridtypeSub: Subscription;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.gridtypeSub = this.productService.gridType.subscribe((data) => {
      this.gridType = data;
    });
    this.productSub = this.productService.productsChanges.subscribe((data) => {
      this.products = data;
    });
  }
  ngOnDestroy(): void {
    this.gridtypeSub.unsubscribe();
    this.productSub.unsubscribe();
  }
}
