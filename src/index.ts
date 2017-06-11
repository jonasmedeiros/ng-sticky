import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleDirective } from './sample.directive';
export * from './sample.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleDirective
  ],
  exports: [
    SampleDirective
  ]
})
export class NgStickyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgStickyModule
    };
  }
}
