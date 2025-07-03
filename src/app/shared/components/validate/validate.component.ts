import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-validate',
  templateUrl: './validate.component.html',
})
export class ValidateComponent {
  @Input() control!: AbstractControl | null;
  @Input() submitted = false;
  @Input() fieldName = 'This field';

  getErrorMessages(): string[] {
    if (!this.control || !this.control.errors) return [];

    const errors = this.control.errors;
    const messages: string[] = [];

    if (errors['required']) {
      messages.push(`${this.fieldName} is required.`);
    }
    if (errors['email']) {
      messages.push('Please enter a valid email.');
    }
    if (errors['minlength']) {
      messages.push(
        `${this.fieldName} must be at least ${errors['minlength'].requiredLength} characters.`
      );
    }
    if (errors['weakPassword']) {
      messages.push('Password is not strong enough.');
    }
    if (errors['passwordMismatch']) {
      messages.push('Passwords do not match.');
    }

    return messages;
  }
}
