import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { ConfigModule } from '@spartacus/core';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { ProductDetailPageModule } from './features/pages/product-detail-page/product-detail-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'spartacus-app' }),

    // this module must be introduced before the B2cStorefrontModule
    ProductDetailPageModule,

    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: environment.occBaseUrl,
        },
      },
      context: {
        baseSite: ['electronics-spa'],
      },
    }),

    // demonstrate i18n
    ConfigModule.withConfig({
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: {
        level: '1.3',
        anonymousConsents: true,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
