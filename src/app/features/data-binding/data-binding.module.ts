import { NgModule } from '@angular/core';
import { ProductAdapter, PRODUCT_NORMALIZER } from '@spartacus/core';
import { BestbuyProductAdapter } from './product.adapter';
import { BestbuyProductNormalizer } from './product.converter';

@NgModule({
  providers: [
    {
      provide: ProductAdapter,
      useExisting: BestbuyProductAdapter,
    },
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: BestbuyProductNormalizer,
      multi: true,
    },
  ],
})
export class BootcampDataBindingModule {}
