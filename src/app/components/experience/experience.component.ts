import { Component, inject } from '@angular/core';
import { CvData } from '../../services/cv-data.service';
import { SectionTitle } from "../../shared/section-title/section-title.component";
import { TimelineItem } from "../../shared/timeline-item/timeline-item.component";
import { ScrollAnimation } from '../../directives/scroll-animation.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { BilingualListPipe } from '../../pipes/bilingual-list.pipe';

@Component({
  selector: 'app-experience',
  imports: [SectionTitle, TimelineItem, ScrollAnimation, TranslatePipe, BilingualListPipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class Experience {
  cvData = inject(CvData);
  experience = this.cvData.experience;
}
