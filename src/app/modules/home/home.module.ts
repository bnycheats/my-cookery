import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CardsSectionComponent } from './components/cards-section/cards-section.component';
import { JoinUsSectionComponent } from './components/join-us-section/join-us-section.component';
import { NoAuthHomePage } from './components/not-auth-home/no-auth-home.page';
import { ProtectedHomePage } from './components/protected-home/protected-home.page';

@NgModule({
  declarations: [
    HomePage,
    NoAuthHomePage,
    ProtectedHomePage,
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
