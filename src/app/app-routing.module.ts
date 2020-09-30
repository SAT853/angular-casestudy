import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'router1',
    loadChildren: () =>
      import('./floating-image/floating-image.module').then(
        (m) => m.FloatingImageModule
      ),
  },
  {
    path: 'router2',
    loadChildren: () =>
      import('./product-page/product-page.module').then(
        (m) => m.ProductPageModule
      ),
  },
  {
    path: 'router3',
    loadChildren: () =>
      import('./count-down/count-down.module').then((m) => m.CountDownModule),
  },
  {
    path: 'router4',
    loadChildren: () =>
      import('./count-down-obs/count-down-obs.module').then(
        (m) => m.CountDownObsModule
      ),
  },
  {
    path: 'router5',
    loadChildren: () =>
      import('./student-data/student-data.module').then(
        (m) => m.StudentDataModule
      ),
  },
  {
    path: 'router6',
    loadChildren: () =>
      import('./dyanamic-div/dyanamic-div.module').then(
        (m) => m.DyanamicDivModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
