import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-separator-or-component',
  templateUrl: './separator-or.component.html',
  imports: [CommonModule],
})
export class SeparatorOrComponent {
  @HostBinding('class') hostClass = 'block';
}
