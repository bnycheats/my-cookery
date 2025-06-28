import { Component, Input } from '@angular/core';
import { PAGES } from '../../../contants/routes';

@Component({
  standalone: false,
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class Logo {
  pages = PAGES;

  @Input() logoClass: string = '';
}
