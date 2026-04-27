import { computed, Injectable, signal } from '@angular/core';
import { Devicon } from '../models/devicon';

const VARIANT_PRIORITY: string[] = [
  'original',
  'original-wordmark',
  'plain',
  'plain-wordmark',
  'line',
  'line-wordmark'
];

@Injectable({
  providedIn: 'root',
})
export class IconResolver {
  private readonly BASE_PATH = 'assets/icons/tech';
  private readonly DEVICON_JSON_PATH = 'assets/devicon.json';

  // -------------- Estado Interno --------------
  private registry = signal<Map<string, Devicon>>(new Map());
  private loaded = signal(false);

  isReady = computed(() => this.loaded());

  /**
   * Carga el devicon.json una sola vez al iniciar la app.
   * Debe llamarse en APP_INITIALIZER o en el componente raíz.
   */

  async loadRegistry(): Promise<void> {
    if (this.loaded()) return;

    try {
      const response = await fetch(this.DEVICON_JSON_PATH);
      const entries: Devicon[] = await response.json();

      const map = new Map<string, Devicon>();
      for (const entry of entries) {
        map.set(entry.name, entry);

        // También registrar los altnames para búsqueda
        for ( const alt of entry.altnames ) {
          if (!map.has(alt.toLowerCase())) {
            map.set(alt.toLowerCase(), entry);
          }
        }
      }

      this.registry.set(map);
      this.loaded.set(true);
      console.log(`[IconResolver] Registro cargado: ${entries.length} íconos disponibles`);
    } catch (error) {
      console.error('[IconResolver] Error al cargar devicon.json: ', error);
    }
  }

  /**
   * Resuelve la ruta local del ícono automáticamente.
   *
   * 1. Busca el iconKey en el registro de devicon.json
   * 2. Determina la mejor variante SVG disponible según prioridad
   * 3. Construye la ruta local
   *
   * Ejemplo:
   *   resolveIcon('angular')  → 'assets/icons/tech/angular/angular-original.svg'
   *   resolveIcon('jest')     → 'assets/icons/tech/jest/jest-plain.svg'
   *   resolveIcon('aws')      → 'assets/icons/tech/amazonwebservices/amazonwebservices-original-wordmark.svg'
   */
  

  resolveIcon(iconKey: string): string {
    const entry = this.registry().get(iconKey.toLowerCase());

    if (!entry) {
      // Si no está en el registro, intentar con "original" como fallback
      return `${this.BASE_PATH}/${iconKey}/${iconKey}-original.svg`;
    }

    const variant = this.getBestVariant(entry.versions.svg);
    // Usar entry.name (el nombre real de la carpeta en devicon)
    return `${this.BASE_PATH}/${entry.name}/${entry.name}-${variant}.svg`;
  }
  
  /**
   * Obtiene info completa de un ícono (útil para debug o UI).
   */
  getIconInfo(iconKey: string): Devicon | undefined {
    return this.registry().get(iconKey.toLowerCase());
  }

  /**
   * Retorna todas las variantes SVG disponibles para un ícono
   */
  getAvailableVariants(iconKey:string): string[] {
    const entry = this.registry().get(iconKey.toLowerCase());
    return entry?.versions.svg ?? [];
  }

  /**
   * Forzar una variante especifica (override manual)
   */
  resolveIconVariant(iconKey: string, variant: string): string {
    const entry = this.registry().get(iconKey.toLowerCase());
    const realName = entry?.name ?? iconKey;
    return `${this.BASE_PATH}/${realName}/${realName}-${variant}.svg`;
  }

  /**
   * Selecciona la mejor variante según la lista de prioridad
   */
  private getBestVariant(availableVariants: string[]): string {
    for (const variant of VARIANT_PRIORITY) {
      if (availableVariants.includes(variant)) {
        return variant;
      }
    }
    // Si ninguna coincide, usar la primera disponible
    return availableVariants[0] ?? 'original';
  }
}
