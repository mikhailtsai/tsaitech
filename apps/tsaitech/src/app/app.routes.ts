import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@tsaitech/pages/home').then((m) => m.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
