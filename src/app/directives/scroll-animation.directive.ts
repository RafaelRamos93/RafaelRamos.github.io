import { Directive, ElementRef, inject, input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimation implements OnInit, OnDestroy {
  animationClass = input<string>('fade-in');
  delay = input<string>('0ms');

  private el = inject(ElementRef);
  private observer!: IntersectionObserver;

  ngOnInit(): void {
    const nativeEl = this.el.nativeElement as HTMLElement;
    nativeEl.classList.add(this.animationClass());
    nativeEl.style.transitionDelay = this.delay();

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          nativeEl.classList.add('visible');
          this.observer.unobserve(nativeEl);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    this.observer.observe(nativeEl);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
