import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TraditionalPage } from './pages/traditional/traditional.page';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TraditionalPage],
  imports: [CommonModule, LoginRoutingModule, SharedModule],
})
export class LoginModule {}
