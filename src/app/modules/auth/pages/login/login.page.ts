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

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  });
}
