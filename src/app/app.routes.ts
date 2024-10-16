import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./Auth/pages/login/login.component'),
  },
  {
    path: 'inventory-management',
    loadComponent: () =>
      import('./inventoryManagement/inventory-management.component'),
    children: [
      {
        path: '',
        redirectTo: '/inventory-management/products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./inventoryManagement/pages/products/products.component'),
      },
      {
        path: 'stock',
        loadComponent: () =>
          import('./inventoryManagement/pages/stock/stock.component'),
      },
      {
        path: 'input-output',
        loadComponent: () =>
          import(
            './inventoryManagement/pages/input-output/input-output.component'
          ),
      },
      {
        path: 'historical',
        loadComponent: () =>
          import('./inventoryManagement/pages/historical/historical.component'),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./Shared/components/page-not-found/page-not-found.component'),
  },
];
