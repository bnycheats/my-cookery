import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Spinner } from '../spinner/spinner.component';

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [CommonModule, Spinner],
})
export class ButtonComponent {
  @Output() onClick: EventEmitter<unknown> = new EventEmitter();

  @Input() text = '';

  @Input() emits = '';

  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';

  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Input() showLoader = false;

  @Input() disabled = false;

  @Input() customClass?: string = '';

  onButtonClick(): void {
    this.onClick.emit(this.emits);
  }
}
