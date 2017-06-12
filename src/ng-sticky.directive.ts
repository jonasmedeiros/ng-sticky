import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ng-sticky]'
})
export class NgStickyDirective {

  private sticked: boolean = true;
  private selectedOffset: number = 0;
  private windowOffsetTop: number = 0;

  @Input() addClass: string = 'fixed';
  @Input() offSet: number = 0;

  constructor(private el: ElementRef, private render:Renderer2) {
    this.selectedOffset = this.el.nativeElement.offsetTop;
  }

  private addSticky() {
    this.sticked = true;
    this.el.nativeElement.style.position = 'fixed';
    this.el.nativeElement.style.top = this.offSet + 'px';
    this.render.addClass(this.el.nativeElement, this.addClass);
  }

  private removeSticky() {
    this.sticked = false;
    this.el.nativeElement.style.position = '';
    this.render.removeClass(this.el.nativeElement, this.addClass);
  }

  @HostListener("window:scroll", [])
    onWindowScroll() {

      let offset: number = this.el.nativeElement.offsetTop;
      this.windowOffsetTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      if (this.sticked === false) {
        this.selectedOffset = offset;
      }

      if ((this.windowOffsetTop + this.offSet) > this.selectedOffset) {
        
        this.addSticky();
      } else {
        this.removeSticky();
      }
    }


}