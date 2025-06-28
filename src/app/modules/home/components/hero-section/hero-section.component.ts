import { Component } from '@angular/core';
import { PAGES } from '../../../../contants/routes';

@Component({
  standalone: false,
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  pages = PAGES;
}
