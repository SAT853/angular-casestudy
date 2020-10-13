import { Subscription } from 'rxjs';
import { ProductService, Products } from './product.service';
import { productsData } from './products.data';
import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
