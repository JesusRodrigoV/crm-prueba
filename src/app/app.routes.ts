import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
    title: 'QuantumCore - Inicio',
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component'),
    title: 'QuantumCore - Productos',
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./pages/products/product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent,
      ),
    title: 'QuantumCore - Detalles',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
    title: 'QuantumCore - Nosotros',
  },
  { path: '**', redirectTo: '' },
];
