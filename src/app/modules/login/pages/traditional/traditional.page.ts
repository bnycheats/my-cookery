import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-traditional-page',
  templateUrl: './traditional.page.html',
})
export class TraditionalPage {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
}
