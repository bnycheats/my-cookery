import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CardComponent } from './components/card/card.componen';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CardsSectionComponent } from './components/cards-section/cards-section.component';
import { JoinUsSectionComponent } from './components/join-us-section/join-us-section.component';

@NgModule({
  declarations: [
    HomePage,
    HeroSectionComponent,
    CardsSectionComponent,
    JoinUsSectionComponent,
  ],
  imports: [
    CardComponent,
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    SharedModule,
    RouterLink,
  ],
})
export class HomeModule {}
