import { computed, inject, Injectable, signal } from '@angular/core';
import { CV_DATA } from '../data/cv-data';
import { CvDataInfo, Project, TechCategory, Technology, TechCategoryInfo, Bilingual } from '../models/cv-data.interface';
import { Translate } from './translate.service';

@Injectable({
  providedIn: 'root',
})
export class CvData {
  private ts = inject(Translate);
  private data = signal<CvDataInfo>(CV_DATA);

  // ─── Helper para resolver campos bilingües ───
  b(field: Bilingual): string {
    return field[this.ts.currentLang()];
  }

  personalInfo    = computed(() => this.data().personalInfo);
  experience      = computed(() => this.data().experience);
  education       = computed(() => this.data().education);
  technologies    = computed(() => this.data().technologies);
  projects        = computed(() => this.data().projects);
  certifications  = computed(() => this.data().certifications);

  featuredProjects = computed(() =>
    this.data().projects.filter((p: Project) => p.featured)
  );

  techByCategory = computed(() => {
    const grouped = new Map<TechCategory, Technology[]>();
    for (const tech of this.data().technologies) {
      const current: Technology[] = grouped.get(tech.category) || [];
      current.push(tech);
      grouped.set(tech.category, current);
    }
    return grouped;
  });

 categoryInfo: TechCategoryInfo[] = [
    { key: 'languages',  label: { es: 'Lenguajes',              en: 'Languages' },              icon: '⟨/⟩' },
    { key: 'frameworks', label: { es: 'Frameworks & Librerías', en: 'Frameworks & Libraries' }, icon: '⚙️' },
    { key: 'databases',  label: { es: 'Bases de Datos',         en: 'Databases' },              icon: '🗄️' },
    { key: 'tools',      label: { es: 'Herramientas',           en: 'Tools' },                  icon: '🛠️' },
    { key: 'cloud',      label: { es: 'Cloud & DevOps',         en: 'Cloud & DevOps' },         icon: '☁️' },
    { key: 'testing',    label: { es: 'Testing',                en: 'Testing' },                icon: '🧪' },
  ];
}
