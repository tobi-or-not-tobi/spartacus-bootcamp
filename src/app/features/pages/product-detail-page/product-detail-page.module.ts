import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsPageGuard,
  PageSlotModule,
  ProductIntroModule,
} from '@spartacus/storefront';
import { ProductDetailPageComponent } from './product-detail-page.component';

@NgModule({
  declarations: [ProductDetailPageComponent],
  imports: [
    CommonModule,
    PageSlotModule,
    ProductIntroModule,
    RouterModule.forChild([
      {
        // path with dynamic param:
        path: null,
        data: { cxRoute: 'product' },

        // those are needed to display slots and components from CMS:
        component: ProductDetailPageComponent,
        canActivate: [CmsPageGuard],
      },
    ]),
  ],
})
export class ProductDetailPageModule {}
