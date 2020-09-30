import { StudentData } from './studentData.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
})
export class KeysPipe implements PipeTransform {
  transform(value: StudentData, ...args: any[]): any {
    return Object.keys(value);
  }
}
