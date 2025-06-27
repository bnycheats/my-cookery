import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main/main.layout';
import { PAGES } from './contants/routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: PAGES.HOME,
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayout,
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: PAGES.REGISTER,
    component: MainLayout,
    loadChildren: () =>
      import('./modules/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: PAGES.HOME,
    component: MainLayout,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: PAGES.RECIPES,
    component: MainLayout,
    loadChildren: () =>
      import('./modules/recipes/recipes.module').then((m) => m.RecipesModule),
  },
];
