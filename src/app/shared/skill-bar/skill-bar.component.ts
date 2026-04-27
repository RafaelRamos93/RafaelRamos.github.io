import { Component, ElementRef, inject, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  imports: [],
  templateUrl: './skill-bar.component.html',
  styleUrl: './skill-bar.component.scss',
})
export class SkillBar implements OnInit {
  
  name = input.required<string>();
  level = input.required<number>();

  animatedLevel = signal(0);
  private el = inject(ElementRef);
  private observer!: IntersectionObserver;

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animateBar();
          this.observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.3 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  private animateBar(): void {
    const target = this.level();
    let current = 0;
    const step = target / 40;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        this.animatedLevel.set(target);
        clearInterval(interval);
      } else {
        this.animatedLevel.set(Math.round(current));
      }
    }, 20);
  }
}
