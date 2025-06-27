import { CommonModule } from '@angular/common';
import { Component, Input, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-recipes-card-component',
  templateUrl: './recipes-card.component.html',
  imports: [CommonModule],
})
export class RecipesCardComponent {
  @HostBinding('class') hostClass =
    'relative h-full overflow-hidden rounded-2xl';

  @Input() titleClass?: string = '';
  @Input() title: string = '';
  @Input() imageSrc: string = '';
}
