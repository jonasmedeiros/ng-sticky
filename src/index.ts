import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStickyDirective } from './ng-sticky.directive';
export * from './ng-sticky.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgStickyDirective
  ],
  exports: [
    NgStickyDirective
  ]
})
export class NgStickyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgStickyModule
    };
  }
}
