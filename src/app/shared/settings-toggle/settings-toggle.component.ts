import { Component, inject, signal } from '@angular/core';
import { Theme } from '../../services/theme.service';
import { Translate } from '../../services/translate.service';

@Component({
  selector: 'app-settings-toggle',
  imports: [],
  templateUrl: './settings-toggle.component.html',
  styleUrl: './settings-toggle.component.scss',
})
export class SettingsToggle {
  themeService = inject(Theme);
  translateService = inject(Translate);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLanguage(): void {
    this.translateService.toggleLanguage();
  }
}
