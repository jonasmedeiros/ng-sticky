import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ng-sticky]'
})
export class SampleDirective {

  constructor(private el: ElementRef) {
  }

}
