import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductHeaderComponent } from './product-header/product-header.component';

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductListComponent,
    ProductHeaderComponent,
  ],
  imports: [CommonModule, ProductPageRoutingModule, FormsModule],
})
export class ProductPageModule {}
