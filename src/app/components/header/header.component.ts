import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { Subscription } from 'rxjs';
import { ScrollHeaderService } from '../../services/scroll-header.service';
import { PAGES } from '../../contants/routes';

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

  pages = PAGES;

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

  constructor(private scrollService: ScrollHeaderService) {}

  ngOnInit() {
    this.scrollSub = this.scrollService.isHidden$.subscribe(
      (hidden) => (this.isHidden = hidden)
    );
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
