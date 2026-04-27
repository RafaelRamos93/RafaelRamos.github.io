import { Component, HostListener, inject, signal } from '@angular/core';
import { Scroll } from '../../services/scroll.service';
import { CvData } from '../../services/cv-data.service';
import { Translate } from '../../services/translate.service';
import { SettingsToggle } from '../../shared/settings-toggle/settings-toggle.component';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-navbar',
  imports: [SettingsToggle, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class Navbar {
  private cvData = inject(CvData);
  data = this.cvData.personalInfo;
  private scrollService = inject(Scroll);

  private translateService = inject(Translate);
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  // ----- Items de navegación reactivos al idioma ----
  get navItems() {
    return [
      { label: this.translateService.t('nav.home'), target: 'hero' },
      { label: this.translateService.t('nav.about'), target: 'about' },
      { label: this.translateService.t('nav.experience'), target: 'experience' },
      { label: this.translateService.t('nav.education'), target: 'education' },
      { label: this.translateService.t('nav.skills'), target: 'skills' },
      { label: this.translateService.t('nav.projects'), target: 'projects' },
      { label: this.translateService.t('nav.contact'), target: 'contact' },
    ];
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollTo(target: string): void {
    this.scrollService.scrollToElement(target);
    this.isMenuOpen.set(false);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }
}
