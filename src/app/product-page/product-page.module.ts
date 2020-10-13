import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductPageComponent, ProductListComponent],
  imports: [CommonModule, ProductPageRoutingModule],
})
export class ProductPageModule {}
