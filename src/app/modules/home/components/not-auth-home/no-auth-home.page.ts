import { Component } from '@angular/core';
import { PAGES } from '../../../../contants/routes';

@Component({
  standalone: false,
  selector: 'app-no-auth-home-page',
  templateUrl: './no-auth-home.page.html',
})
export class NoAuthHomePage {
  pages = PAGES;
}
