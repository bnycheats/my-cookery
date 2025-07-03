import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { Subscription } from 'rxjs';
import { ScrollHeaderService } from '../../core/services/scroll-header.service';
import { PAGES } from '../../contants/routes';
import { AuthService } from '../../core/services/auth.service';
import { User } from '@supabase/supabase-js';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, RouterLink, SharedModule],
})
export class Header implements OnInit, OnDestroy {
  private scrollSub?: Subscription;
  isHidden: boolean = false;
  openDrawer: boolean = false;
  avatarName: string = '';
  pages = PAGES;

  user: User | null = null;
  isAuthenticated: boolean = false;
  loading: boolean = true;

  links: Link[] = [
    {
      label: 'Recipes',
      path: '/' + PAGES.RECIPES,
    },
    {
      label: 'Cookbook',
      path: '/' + PAGES.COOKBOOK,
    },
  ];

  constructor(
    private scrollService: ScrollHeaderService,
    private readonly authService: AuthService
  ) {}

  async ngOnInit() {
    this.scrollSub = this.scrollService.isHidden$.subscribe(
      (hidden) => (this.isHidden = hidden)
    );

    this.authService.user$.subscribe((user) => {
      this.user = user;
      this.avatarName = user?.email?.charAt(0) ?? '';
    });

    this.authService.loading$.subscribe((loading) => {
      this.loading = loading;
    });

    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  ngOnDestroy() {
    this.scrollSub?.unsubscribe();
  }

  onToggleDrawer(): void {
    this.openDrawer = !this.openDrawer;
    if (this.openDrawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

type Link = {
  label: string;
  path: string;
};
