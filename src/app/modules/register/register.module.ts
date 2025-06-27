import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterPage } from './register.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [RegisterPage],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RegisterPage }]),
    SharedModule,
  ],
})
export class RegisterModule {}
