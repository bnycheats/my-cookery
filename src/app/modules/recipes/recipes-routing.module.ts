import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RecipesPage } from './pages/recipes/recipes.page';
import { RecipesDetailPage } from './pages/detail/recipes-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage,
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: RecipesDetailPage,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
