import { CommonModule } from '@angular/common';
import { Component, Input, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-social-button-component',
  templateUrl: './social-button.component.html',
  imports: [CommonModule],
})
export class SocialLoginComponent {
  @HostBinding('class') hostClass = 'block';

  @Input() iconSrc: string = '';
  @Input() iconClass: string = '';
  @Input() iconAlt: string = '';
}
