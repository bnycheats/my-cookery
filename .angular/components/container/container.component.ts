import { Component, HostBinding } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-container',
  templateUrl: './container.component.html',
})
export class Container {
  @HostBinding('class') hostClass = 'max-w-7xl px-6 mx-auto block';
}
