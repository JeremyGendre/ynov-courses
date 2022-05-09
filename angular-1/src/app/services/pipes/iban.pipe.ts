import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iban'
})
export class IbanPipe implements PipeTransform {

  lengths = [2, 2, 24];

  transform(value: string): unknown {
    if(!value) return '';
    let result: string = '';
    let sum = 0;
    for (let length of this.lengths){
      result += value.slice(sum, sum + length) + ' ';
      sum += length;
    }
    return result;
  }

}
