import { Component } from '@angular/core';
import { PAGES } from '../../contants/routes';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: false,
  selector: 'app-home-page',
  templateUrl: './home.page.html',
})
export class HomePage {
  pages = PAGES;

  isAuthenticated: boolean = false;
  loading: boolean = true;

  constructor(private readonly authService: AuthService) {}

  async ngOnInit() {
    this.authService.loading$.subscribe((loading) => {
      this.loading = loading;
    });

    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }
}
