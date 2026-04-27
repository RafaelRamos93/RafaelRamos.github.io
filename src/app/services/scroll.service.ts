import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Scroll {

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Altura del navbar fijo
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
