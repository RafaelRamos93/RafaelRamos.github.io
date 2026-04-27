import { computed, effect, Injectable, signal } from '@angular/core';

export type Themes = 'dark' | 'light' | 'system';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private readonly STORAGE_KEY = 'cv.digital-theme';

  // ------ Preferencia seleccionada por el usuario -------
  selectedTheme = signal<Themes>(this.loadSavedTheme());

  // ------ Tema real aplicado (resolviendo 'system') -----
  resolvedTheme = computed<'dark' | 'light'>(() => {
    const selected = this.selectedTheme();
    if (selected === 'system') {
      return this.getSystemPreference();
    }
    return selected;
  });

  isDark = computed(() => this.resolvedTheme() === 'dark');

  constructor() {
    // Aplicar el tema al cambiar
    effect(() => {
      const theme = this.resolvedTheme();
      this.applyTheme(theme);
    });

    // Escuchar cambios del sistema operativo en tiempo real
    this.listenToSystemChanges();
  }

  // ---------- Metodos publicos --------------
  setTheme(theme: Themes): void {
    this.selectedTheme.set(theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
  }

  toggleTheme(): void {
    const current = this.resolvedTheme();
    this.setTheme(current === 'dark' ? 'light' : 'dark');
  }

  // ------------- Metodos privados -----------
  private loadSavedTheme(): Themes {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem(this.STORAGE_KEY) as Themes | null;
    return saved ?? 'system'; // Por defecto respetar la preferencia del sistema
  }

  private getSystemPreference(): 'dark' | 'light' {
    if (typeof window === 'undefined') return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private applyTheme(theme: 'dark' | 'light'): void {
    if (typeof window === 'undefined') return;
    document.documentElement.setAttribute('data-theme', theme);
  }

  private listenToSystemChanges(): void {
    if (typeof window === 'undefined') return;
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      // Solo reaccionar si el usuario eligió 'system'
      if (this.selectedTheme() === 'system') {
        // Forzar recompute del resolvedTheme
        this.selectedTheme.set('system');
      }
    });
  }
}
