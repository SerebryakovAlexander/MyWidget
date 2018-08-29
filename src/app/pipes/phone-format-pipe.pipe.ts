import { Pipe, PipeTransform } from '@angular/core';
import { sprintf } from 'sprintf-js';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(phoneNumber: number): string {
    // 128 596 86 85
    return sprintf('+ (%s) %s %s %s',
      phoneNumber.toString().substr(0, 3),
      phoneNumber.toString().substr(3, 3),
      phoneNumber.toString().substr(6, 2),
      phoneNumber.toString().substr(8, 2)
    );
  }

}
