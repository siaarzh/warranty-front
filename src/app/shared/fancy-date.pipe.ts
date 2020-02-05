import { Pipe } from '@angular/core';
import { formatDistance, format } from 'date-fns';
import { ru } from 'date-fns/locale';

@Pipe({
  name: 'fancyDate',
})
export class FancyDatePipe {
  transform(date: Date): string {
    const diff = (new Date().getTime() - date.getTime()) / 1000;
    const daydiff = Math.floor(diff / 86400);
    let formattedDate: string;

    if (isNaN(daydiff) || daydiff < 0) {
      return '';
    }

    if (daydiff == 0) {
      formattedDate = formatDistance(date, new Date(), { locale: ru }) + ' назад';
    } else if (daydiff == 1) {
      formattedDate = 'вчера';
    } else if (daydiff < 7) {
      formattedDate = formatDistance(date, new Date(), { locale: ru }) + ' назад';
    } else {
      formattedDate = format(date, 'd MMMM yyyy', { locale: ru });
    }

    return formattedDate;
  }
}
