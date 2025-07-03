import { Component } from '@angular/core';
import { PAGES } from '../../../../contants/routes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../../../core/validators/confirm-password.validator';

@Component({
  standalone: false,
  selector: 'app-register-page',
  templateUrl: './register.page.html',
})
export class RegisterPage {
  pages = PAGES;
  submitted = false;

  registerForm = new FormGroup(
    {
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone_no: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: confirmPasswordValidator('password', 'confirmPassword') }
  );

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
      // Proceed with API call or further logic
    } else {
      console.log('Form Invalid');
    }
  }
}
