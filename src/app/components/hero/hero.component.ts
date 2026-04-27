import { Component, inject, OnInit } from '@angular/core';
import { CvData } from '../../services/cv-data.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Translate } from '../../services/translate.service';

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class Hero{
  
  cvData = inject(CvData);
  private ts = inject(Translate);

  data = this.cvData.personalInfo;
  particles = Array.from({ length: 6 }, (_,i) => i + 1);

  get title(): string {
    return this.data().title[this.ts.currentLang()];
  }

  get summary(): string {
    return this.data().summary[this.ts.currentLang()];
  }

}
