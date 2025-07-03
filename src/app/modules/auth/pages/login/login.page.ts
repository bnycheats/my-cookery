import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PAGES } from '../../../../contants/routes';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-login-page',
  templateUrl: './login.page.html',
})
export class LoginPage {
  pages = PAGES;
  submitted = false;
  error = '';
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get f() {
    return this.loginForm.controls;
  }

  async onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.loading = true;
      console.log('Form Submitted!', this.loginForm.value);

      try {
        const { error } = await this.authService.signIn(
          this.loginForm.controls.email.value ?? '',
          this.loginForm.controls.password.value ?? ''
        );

        if (error) {
          this.error = error.message;
        } else {
          this.router.navigate(['/' + PAGES.RECIPES]);
        }
      } catch (err) {
        this.error = 'Unexpected error occurred';
      } finally {
        this.loading = false;
      }
    } else {
      console.log('Form Invalid');
    }
  }
}
