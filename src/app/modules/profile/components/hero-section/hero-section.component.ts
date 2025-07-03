import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { User } from '@supabase/supabase-js';

@Component({
  standalone: false,
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  user: User | null = null;

  constructor(private readonly authService: AuthService) {}

  async ngOnInit() {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }
}
