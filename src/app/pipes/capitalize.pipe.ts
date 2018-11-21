import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == "") {
      return "";
    }
    return value.split(" ").map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(" ");
  }

}
