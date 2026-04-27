import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateRange',
})
export class DateRangePipe implements PipeTransform {

  private months: Record<string, string> = {
    '01': 'Ene', '02': 'Feb', '03': 'Mar', '04': 'Abr',
    '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Ago',
    '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dic'
  };

  transform(startDate: string, endDate: string): string {
    const start = this.formatDate(startDate);
    const end = endDate === 'Actual' ? 'Actual' : this.formatDate(endDate);
    return `${start} — ${end}`;
  }

  private formatDate(date: string): string {
    const parts = date.split('-');
    if (parts.length === 2) {
      return `${this.months[parts[1]]} ${parts[0]}`;
    }
    return date;
  }
}
