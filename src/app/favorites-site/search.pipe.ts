import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Website} from '../models/website';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(websites: Website[], field: string, value: string): Website[] {
    if (value === '') {
      return websites;
    }
    value = value.toLowerCase();
    return websites.filter(w => w.name.toLowerCase().startsWith(value) || w.url.toLowerCase().startsWith(value));
  }
}
