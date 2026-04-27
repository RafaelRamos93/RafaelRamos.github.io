import { Component, inject } from '@angular/core';
import { CvData } from '../../services/cv-data.service';
import { SectionTitle } from "../../shared/section-title/section-title.component";
import { TimelineItem } from "../../shared/timeline-item/timeline-item.component";
import { ScrollAnimation } from '../../directives/scroll-animation.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-education',
  imports: [SectionTitle, TimelineItem, ScrollAnimation, TranslatePipe],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class Education {
  cvData = inject(CvData);
  education = this.cvData.education;
  certifications = this.cvData.certifications;
}
