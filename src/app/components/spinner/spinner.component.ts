import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  imports: [CommonModule],
})
export class Spinner {
  @Input() customClass?: string = '';
}
