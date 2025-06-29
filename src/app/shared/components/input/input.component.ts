import {
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputField),
      multi: true,
    },
  ],
})
export class InputField implements ControlValueAccessor {
  @HostBinding('class') hostClass = 'block';

  @Input() control!: AbstractControl | null;
  @Input() submitted = false;
  @Input() label: string = '';
  @Input() fieldType: string = 'text';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() name: string = '';
  @Input() tabIndex?: string;
  @Input() autocomplete: string = 'off';
  @Input() customStyle?: string;
  @Input() showToggle: boolean = true;

  @Output() blurEvent = new EventEmitter<FocusEvent>();
  @Output() inputChangeEvent = new EventEmitter<Event>();

  id: string = 'field-' + Math.random().toString(36).substring(2, 10);
  value: string = '';
  passwordVisible: boolean = false;

  onChange = (_: string) => {};
  onTouched = () => {};

  get actualInputType(): string {
    return this.fieldType === 'password' && this.passwordVisible
      ? 'text'
      : this.fieldType;
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.inputChangeEvent.emit(event);
  }

  onBlur(event: FocusEvent): void {
    this.onTouched();
    this.blurEvent.emit(event);
  }

  toggleVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
