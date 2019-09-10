# Svelte based CMS  web component for Spartacus

## What is Spartacus?

Spartacus is a lean, Angular-based JavaScript storefront for SAP Commerce Cloud that communicates exclusively through the Commerce REST API.

https://github.com/SAP/cloud-commerce-spartacus-storefront

## What are cms components in Spartacus?

https://sap.github.io/cloud-commerce-spartacus-storefront-docs/customizing-cms-components/

## Build steps

`npm install && npm run buid`

## About the example

Build will result in `svelte-search-box.js`.
    
## Usage in spartacus

1. Copy `svelte-search-box.js` file to assets folder in your shell app

2. Use cms component configuration to replace default search box component:
    
    ```typescript
    {
      cmsComponents: {
        SearchBoxComponent: {
          component: 'assets/svelte-search-box.js#svelte-search'
        },
      }
    }
    ```
