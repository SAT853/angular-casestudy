import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css'],
})
export class ProductHeaderComponent implements OnInit {
  sortType = ['default', 'low-high', 'high-low'];
  selected = 'default';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onGridTwo(): void {
    this.productService.gridType.next('grid-column-two product-container');
  }

  onGridFour(): void {
    this.productService.gridType.next('grid-column-four product-container');
  }
  onSelect(sortType: string): void {
    this.productService.sortProduct(sortType);
  }
}
