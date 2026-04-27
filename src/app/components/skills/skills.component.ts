import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CvData } from '../../services/cv-data.service';
import { SectionTitle } from "../../shared/section-title/section-title.component";
import { ScrollAnimation } from '../../directives/scroll-animation.directive';
import { TechCategory, TechCategoryInfo, Technology } from '../../models/cv-data.interface';
import { IconResolver } from '../../services/icon-resolver.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Translate } from '../../services/translate.service';

@Component({
  selector: 'app-skills',
  imports: [SectionTitle, ScrollAnimation, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class Skills implements OnInit, OnDestroy {
  private cvData = inject(CvData);
  private ts = inject(Translate);
  iconResolver = inject(IconResolver);

  techByCategory = this.cvData.techByCategory;
  categories = this.cvData.categoryInfo;

  // Estado de carrusel
  activeCategory = signal<TechCategory>('languages');
  isPaused = signal(false);

  progress = signal(0);

  private autoRotateInterval: ReturnType<typeof setInterval> | null = null;
  private readonly ROTATE_DELAY = 5000; // 5 segundos por categoria
  private startTime = 0;
  private pausedAt = 0;
  private elapsed = 0;
  private animFrameId: number | null = null;

  // ------- Tecnologías visibles según categoria activa -------
  get visibleTech(): Technology[] {
    const techs = this.techByCategory().get(this.activeCategory()) || [];
    return [...techs].sort((a: Technology, b: Technology) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  }

  get allTechCount(): number {
    let count = 0;
    this.techByCategory().forEach((techs: Technology[]) => {
      count += techs.length;
    });
    return count;
  }

  ngOnInit(): void {
    //this.startAutoRotate();
    this.resetAndStart();
  }
  ngOnDestroy(): void {
    //this.stopAutoRotate();
    this.cancelAnimation();
  }

  selectCategory(key: TechCategory): void {
    this.activeCategory.set(key);
    // Reiniciar el ciclo completo
    //this.restartAutoRotate();
    this.resetAndStart();
  }

  pauseCarousel(): void {
    this.isPaused.set(true);
    //this.stopAutoRotate();
    // Guardar cuanto tiempo había transcurrido
    this.elapsed += performance.now() - this.startTime;
    this.cancelAnimation();
  }

  resumeCarousel(): void {
    this.isPaused.set(false);
    // Verificar que realmente se reinicie
    //this.restartAutoRotate();
    // Reanudar desde donde se quedó
    this.startTime = performance.now();
    this.tick();
  }

  onIconError(event: Event): void {
    const img = event.target as HTMLImageElement;
    // Extraer el nombre de la carpeta de la URL que falló
    const pathParts = img.src.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const folderName = pathParts[pathParts.length - 2];
    // Fallback al CDN de Devicon
    const cdnUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${folderName}/${fileName}`;

    // Solo intentar fallback si no es ya una URL del CDN ( evitar loop infinito )
    if (!img.src.includes('cdn.jsdelivr.net')) {
      img.src = cdnUrl;
    }
  }

  // ==========================================
  //  MOTOR DE ANIMACIÓN (requestAnimationFrame)
  // ==========================================

  private resetAndStart(): void {
    this.cancelAnimation();
    this.elapsed = 0;
    this.progress.set(0);
    this.startTime = performance.now();

    if (!this.isPaused()) {
      this.tick();
    }
  }

  private tick = (): void => {
    const now = performance.now();
    const totalElapsed = this.elapsed + (now - this.startTime);
    const percent = Math.min((totalElapsed / this.ROTATE_DELAY) * 100, 100);

    this.progress.set(percent);

    if (totalElapsed >= this.ROTATE_DELAY) {
      // Tiempo cumplido -> avanzar categoria
      this.nextCategory();
      // Reiniciar el ciclo
      this.elapsed = 0;
      this.progress.set(0);
      this.startTime = performance.now();
    }

    this.animFrameId = requestAnimationFrame(this.tick);
  }

  private cancelAnimation(): void {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  private startAutoRotate(): void {
    if (this.autoRotateInterval !== null) {
      return;
    }
    this.autoRotateInterval = setInterval(() => {
      if (!this.isPaused()) {
        this.nextCategory();
      }
    }, this.ROTATE_DELAY);
  }

  private stopAutoRotate(): void {
    if (this.autoRotateInterval !== null) {
      clearInterval(this.autoRotateInterval);
      this.autoRotateInterval = null;
    }
  }

  private restartAutoRotate(): void {
    this.stopAutoRotate();
    if (!this.isPaused()) {
      this.startAutoRotate();
    }
  }

  private nextCategory(): void {
    const keys = this.categories.map((c: TechCategoryInfo) => c.key);
    const currentIndex = keys.indexOf(this.activeCategory());
    const nextIndex = (currentIndex + 1) % keys.length;
    this.activeCategory.set(keys[nextIndex]);
  }
  
  getCategoryLabel(cat: TechCategoryInfo): string {
    return cat.label[this.ts.currentLang()];
  }
}
