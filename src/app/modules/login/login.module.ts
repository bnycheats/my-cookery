import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TraditionalPage } from './pages/traditional/traditional.page';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginComponent } from './components/social-button/social-button.component';

@NgModule({
  declarations: [TraditionalPage],
  imports: [
    SocialLoginComponent,
    ReactiveFormsModule,
    CommonModule,
    LoginRoutingModule,
    SharedModule,
  ],
})
export class LoginModule {}
