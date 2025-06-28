import { Component } from '@angular/core';
import { PAGES } from '../../../../contants/routes';

@Component({
  standalone: false,
  selector: 'app-join-us-section',
  templateUrl: './join-us-section.component.html',
})
export class JoinUsSectionComponent {
  pages = PAGES;
}
