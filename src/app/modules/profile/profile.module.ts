import { NgModule } from '@angular/core';
import { ProfilePage } from './profile.page';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@NgModule({
  declarations: [HeroSectionComponent, ProfilePage],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProfilePage }]),
    SharedModule,
  ],
})
export class ProfileModule {}
