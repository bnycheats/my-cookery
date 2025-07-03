import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PAGES } from '../../contants/routes';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const session = await this.authService.getSession();
    if (session) {
      this.router.navigate(['/' + PAGES.HOME]);
      return false;
    }
    return true;
  }
}
