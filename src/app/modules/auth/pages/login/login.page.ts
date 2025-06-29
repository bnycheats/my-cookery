import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PAGES } from '../../../../contants/routes';

@Component({
  standalone: false,
  selector: 'app-login-page',
  templateUrl: './login.page.html',
})
export class LoginPage {
  pages = PAGES;
  submitted = false;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      // Proceed with API call or further logic
    } else {
      console.log('Form Invalid');
    }
  }
}
