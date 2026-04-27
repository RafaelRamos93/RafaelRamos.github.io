import { Component, inject, input } from '@angular/core';
import { Project } from '../../models/cv-data.interface';
import { CvData } from '../../services/cv-data.service';
import { Translate } from '../../services/translate.service';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCard {
  project = input.required<Project>();
  private ts = inject(Translate);

  get description(): string {
    return this.project().description[this.ts.currentLang()];
  }
}
