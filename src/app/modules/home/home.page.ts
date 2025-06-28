import { Component } from '@angular/core';
import { PAGES } from '../../contants/routes';

@Component({
  standalone: false,
  selector: 'app-home-page',
  templateUrl: './home.page.html',
})
export class HomePage {
  pages = PAGES;
}
