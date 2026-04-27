import { effect, Injectable, signal } from '@angular/core';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class Translate {
  private readonly STORAGE_KEY = 'cv-digital-lang';
  private readonly SUPPORTED_LANGS: Language[] = ['es', 'en'];

  // Estado
  currentLang = signal<Language>(this.detectInitialLanguage());
  private translations = signal<Record<string, any>>({});
  isReady = signal(false);

  constructor() {
    // Cargar traducciones cuando cambia el idioma
    effect(() => {
      const lang = this.currentLang();
      this.loadTranslations(lang);
    });
  }

  // ------------------ Metodos publicos ---------------------

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    localStorage.setItem(this.STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);
  }

  toggleLanguage(): void {
    const current = this.currentLang();
    this.setLanguage(current === 'es' ? 'en' : 'es');
  }

  /**
   * Obtiene una traduccion por su clave con notación de punto.
   * 
   * Ejemplo:
   *    t('nav.home')  --> 'Inicio' (es) / 'Home' (en)
   */

  t(key: string): string {
    const keys = key.split('.');
    let result: any = this.translations();
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // Si no encuentra la clave, devolver la key como fallback
        return key;
      }
    }

    return typeof result === 'string' ? result : key;
  }

  // -------- Métodos Privados --------------
  /**
   * Detecta el idioma inicial en este orden de prioridad:
   * 1.- Localstorage ( elección previa del usuario )
   * 2.- navigator.language ( idioma del navegador )
   * 3.- Fallback: 'es'
   */

  private detectInitialLanguage(): Language {
    if (typeof window === 'undefined') return 'es';

    const saved = localStorage.getItem(this.STORAGE_KEY) as Language | null;
    if (saved && this.SUPPORTED_LANGS.includes(saved)) {
      return saved;
    }

    const browserLang = this.getBrowserLanguage();
    if (browserLang) {
      return browserLang;
    }

    return 'es';
  }

  /**
   * Detecta el idioma del navegador usando navigator.language
   * y navigator.languages
   */

  private getBrowserLanguage(): Language | null {
    // navigator.languages tiene más opciones ordenadas por preferencia
    const languages = navigator.languages ?? [navigator.language];

    for ( const lang of languages ) {
      // Extraer solo el código de idioma (ej: 'es-MX' --> 'es')
      const code = lang.split('-')[0].toLowerCase();
      if (this.SUPPORTED_LANGS.includes(code as Language)) {
        return code as Language;
      }
    }

    return null;
  }

  private async loadTranslations(lang: Language): Promise<void> {
    try {
      const response = await fetch(`assets/i18n/${lang}.json`);
      const data = await response.json();
      this.translations.set(data);
      this.isReady.set(true);
      document.documentElement.setAttribute('lang', lang);
    } catch (error) {
      console.error(`[Translate] Error loading ${lang}.json: `, error);
    }
  }
}
