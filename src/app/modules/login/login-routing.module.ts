import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TraditionalPage } from './pages/traditional/traditional.page';
import { PAGES } from '../../contants/routes';

const routes: Routes = [
  {
    path: PAGES.LOGIN,
    component: TraditionalPage,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
