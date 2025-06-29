import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { LoginPage } from './pages/login/login.page';
import { PAGES } from '../../contants/routes';
import { RegisterPage } from './pages/register/register.page';

const routes: Routes = [
  {
    path: PAGES.LOGIN,
    component: LoginPage,
    pathMatch: 'full',
  },
  {
    path: PAGES.REGISTER,
    component: RegisterPage,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
