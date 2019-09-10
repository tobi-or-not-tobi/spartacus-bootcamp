# Vue based CMS web component for Spartacus

## What is Spartacus?

Spartacus is a lean, Angular-based JavaScript storefront for SAP Commerce Cloud that communicates exclusively through the Commerce REST API.

https://github.com/SAP/cloud-commerce-spartacus-storefront

## What are cms components in Spartacus?

https://sap.github.io/cloud-commerce-spartacus-storefront-docs/customizing-cms-components/

## Build steps

`yarm && yarn buid`

## About the example

Build will result in `vue-search-box.min.js`.
    
## Usage in spartacus

1. Copy `vue-search-box.min.js` file to assets folder in your shell app

2. Use cms component configuration to replace default search box:
    
    ```typescript
    {
      cmsComponents: {
        SearchBoxComponent: {
          component: 'assets/vue-search-box.min.js#vue-search-box'
        },
      }
    }
    ```
