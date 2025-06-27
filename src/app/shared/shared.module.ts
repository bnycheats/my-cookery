import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Container } from './components/container/container.component';

const SHARED_COMPONENTS = [Container];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [CommonModule],
  exports: [...SHARED_COMPONENTS],
})
export class SharedModule {}
