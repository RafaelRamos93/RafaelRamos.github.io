import { Component, computed, inject, signal } from '@angular/core';
import { CvData } from '../../services/cv-data.service';
import { SectionTitle } from "../../shared/section-title/section-title.component";
import { ProjectCard } from "../../shared/project-card/project-card.component";
import { ScrollAnimation } from '../../directives/scroll-animation.directive';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-projects',
  imports: [SectionTitle, ProjectCard, ScrollAnimation, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class Projects {
  cvData = inject(CvData);
  allProjects = this.cvData.projects;
  showAll = signal(false);

  visibleProjects = computed(() => {
    const projects = this.allProjects();
    return this.showAll()
      ? projects
      : projects.filter(p => p.featured);
  });

  toggleProjects(): void {
    this.showAll.update(v => !v);
  }
}
