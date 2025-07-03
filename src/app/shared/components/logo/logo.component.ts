import { Component, Input } from '@angular/core';
import { PAGES } from '../../../contants/routes';

@Component({
  standalone: false,
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  pages = PAGES;

  @Input() logoClass: string = '';
}
