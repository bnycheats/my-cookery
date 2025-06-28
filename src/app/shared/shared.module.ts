import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Container } from './components/container/container.component';
import { Logo } from './components/logo/logo.component';
import { RouterLink } from '@angular/router';
import { InputField } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

const SHARED_COMPONENTS = [Container, Logo, InputField];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  exports: [...SHARED_COMPONENTS],
})
export class SharedModule {}
