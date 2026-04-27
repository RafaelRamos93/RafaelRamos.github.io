import { inject, Pipe, PipeTransform } from '@angular/core';
import { Translate } from '../services/translate.service';
import { Bilingual } from '../models/cv-data.interface';

@Pipe({
  name: 'bilingualList',
  pure: false
})
export class BilingualListPipe implements PipeTransform {
private ts = inject(Translate);

  transform(items: Bilingual[]): string[] {
    const lang = this.ts.currentLang();
    return items.map(item => item[lang]);
  }
}
