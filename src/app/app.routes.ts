import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main/main.layout';
import { PAGES } from './contants/routes';
import { NoAuthGuard } from './core/guards/no-auth-guard';
import { LoginGuard } from './core/guards/login-guard';

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
      import('./modules/auth/auth.modules').then((m) => m.AuthModule),
    canActivate: [NoAuthGuard],
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
  {
    path: PAGES.PROFILE,
    component: MainLayout,
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [LoginGuard],
  },
];
