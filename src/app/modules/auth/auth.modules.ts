import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginComponent } from './components/social-button/social-button.component';
import { LoginPage } from './pages/login/login.page';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPage } from './pages/register/register.page';
import { SeparatorOrComponent } from './components/separator-or/seperator-or.component';

@NgModule({
  declarations: [LoginPage, RegisterPage],
  imports: [
    SeparatorOrComponent,
    SocialLoginComponent,
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ],
})
export class AuthModule {}
