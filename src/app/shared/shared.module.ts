import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContainerComponent } from './components/container/container.component';
import { LogoComponent } from './components/logo/logo.component';
import { RouterLink } from '@angular/router';
import { InputFieldComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidateComponent } from './components/validate/validate.component';

const SHARED_COMPONENTS = [
  ContainerComponent,
  LogoComponent,
  InputFieldComponent,
  ValidateComponent,
];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  exports: [...SHARED_COMPONENTS],
})
export class SharedModule {}
