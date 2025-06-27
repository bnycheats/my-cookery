import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CardComponent } from './components/card/card.componen';

@NgModule({
  declarations: [HomePage],
  imports: [
    CardComponent,
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    SharedModule,
    RouterLink,
  ],
})
export class HomeModule {}
