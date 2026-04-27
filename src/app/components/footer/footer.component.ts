import { Component, inject } from '@angular/core';
import { CvData } from '../../services/cv-data.service';
import { Scroll } from '../../services/scroll.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class Footer {
  private cvData = inject(CvData);
  private scrollService = inject(Scroll);

  data = this.cvData.personalInfo;
  currentYear = new Date().getFullYear();

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }
}
