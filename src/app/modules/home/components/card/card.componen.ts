import { CommonModule } from '@angular/common';
import { Component, Input, HostBinding } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-card-component',
  templateUrl: './card.component.html',
  imports: [CommonModule, RouterLink],
})
export class CardComponent {
  @HostBinding('class') hostClass =
    'relative h-[582px] w-full overflow-hidden rounded-3xl block flex items-end sm:justify-center md:odd:justify-start md:even:justify-end';

  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() imageSrc: string = '';
  @Input() btnLink: string = '';
  @Input() btnLabel: string = '';
  @Input() bgColor: string = '';
}
