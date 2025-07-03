import { Component } from '@angular/core';
import { PAGES } from '../../../../contants/routes';

@Component({
  standalone: false,
  selector: 'app-protected-home-page',
  templateUrl: './protected-home.page.html',
})
export class ProtectedHomePage {
  pages = PAGES;
}
