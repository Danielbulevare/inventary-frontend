import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { authenticatedGuard } from './core/guards/authenticated.guard';
import { roleGuardGuard } from './core/guards/role-guard.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./Auth/pages/login/login.component'),
    canActivate: [authenticatedGuard],
  },
  {
    path: 'inventory-management',
    loadComponent: () =>
      import('./inventoryManagement/inventory-management.component'),
    children: [
      {
        path: '',
        redirectTo: '/inventory-management/stock',
        pathMatch: 'full',
      },
      {
        path: 'stock',
        loadComponent: () =>
          import('./inventoryManagement/pages/stock/stock.component'),
        canActivate: [authGuard, roleGuardGuard],
        data: { roles: ['General', 'Administrador'] },
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./inventoryManagement/pages/products/products.component'),
        //Protege la ruta de la aplicación si no está autenticado y si tiene el rol adecuado
        canActivate: [authGuard, roleGuardGuard],
        data: { roles: ['Administrador'] },
      },
      {
        path: 'input-output',
        loadComponent: () =>
          import(
            './inventoryManagement/pages/input-output/input-output.component'
          ),
        canActivate: [authGuard, roleGuardGuard],
        data: { roles: ['Administrador', 'General'] },
      },
      {
        path: 'historical',
        loadComponent: () =>
          import('./inventoryManagement/pages/historical/historical.component'),
        canActivate: [authGuard, roleGuardGuard],
        data: { roles: ['Administrador'] },
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
