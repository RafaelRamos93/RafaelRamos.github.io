import { inject, Pipe, PipeTransform } from '@angular/core';
import { Translate } from '../services/translate.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private translateService = inject(Translate);

  transform(key: string): string {
    return this.translateService.t(key);
  }
}
