import { Component } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
})
export class ProductDetailPageComponent {
  product$ = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) {}
}
