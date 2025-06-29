import { Component } from '@angular/core';
import { PAGES } from '../../../../contants/routes';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-register-page',
  templateUrl: './register.page.html',
})
export class RegisterPage {
  pages = PAGES;

  registerForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone_no: new FormControl(''),
    password: new FormControl(''),
  });
}
