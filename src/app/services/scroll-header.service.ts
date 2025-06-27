import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollHeaderService {
  private isHiddenSubject = new BehaviorSubject<boolean>(false);
  isHidden$ = this.isHiddenSubject.asObservable();

  private lastScrollY = 0;

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'scroll')
        .pipe(throttleTime(50)) // prevent too frequent updates
        .subscribe(() => this.handleScroll());
    });
  }

  private handleScroll() {
    const currentY = window.scrollY;

    const shouldHide = currentY > this.lastScrollY && currentY > 50;
    this.lastScrollY = currentY;

    // Only emit when value changes
    if (this.isHiddenSubject.value !== shouldHide) {
      this.ngZone.run(() => {
        this.isHiddenSubject.next(shouldHide);
      });
    }
  }
}
