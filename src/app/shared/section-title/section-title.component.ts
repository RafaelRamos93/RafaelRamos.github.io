import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitle {
  number = input.required<string>();
  title = input.required<string>();
  subtitle = input<string>('');
}
