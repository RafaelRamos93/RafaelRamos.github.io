import { Component, inject } from '@angular/core';
import { CvData } from '../../services/cv-data.service';
import { ScrollAnimation } from '../../directives/scroll-animation.directive';
import { SectionTitle } from "../../shared/section-title/section-title.component";
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Translate } from '../../services/translate.service';

@Component({
  selector: 'app-about',
  imports: [ScrollAnimation, SectionTitle, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class About {
  cvData = inject(CvData);
  ts = inject(Translate);
  data = this.cvData.personalInfo;

  get highlights() {
    return [
      { label: this.ts.t('about.years_exp'), value: '+5' },
      { label: this.ts.t('about.projects_done'), value: '+20' },
      { label: this.ts.t('about.technologies'), value: '+15' },
      { label: this.ts.t('about.certifications'), value: '3' }
    ];
  }
}
