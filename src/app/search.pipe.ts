import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(val: any[], arg: any) {
    return val.filter((data) =>
      data.title.toLowerCase().includes(arg.toLowerCase())
    );
  }
}
