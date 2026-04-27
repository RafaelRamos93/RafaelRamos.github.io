import { Component, input } from '@angular/core';
import { DateRangePipe } from "../../pipes/date-range.pipe";

@Component({
  selector: 'app-timeline-item',
  imports: [DateRangePipe],
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.scss',
})
export class TimelineItem {
  title = input.required<string>();
  subtitle = input.required<string>();
  startDate = input.required<string>();
  endDate = input.required<string>();
  description = input<string>('');
  items = input<string[]>([]);
  tags = input<string[]>([]);
}
