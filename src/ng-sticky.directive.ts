import {Directive, ElementRef, Input, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[ng-sticky]'
})
export class NgStickyDirective {

    private stuck = true;
    private selectedOffset = 0;
    private windowOffsetTop = 0;

    @Input() addClass = 'fixed';
    @Input() offSet = 0;
    @Input() getOffsetTopFromParent = false;

    constructor(private el: ElementRef, private render: Renderer2) {
        this.selectedOffset = this.el.nativeElement.offsetTop;
    }

    private addSticky() {
        this.stuck = true;
        this.el.nativeElement.style.position = 'fixed';
        this.el.nativeElement.style.top = this.offSet + 'px';
        this.render.addClass(this.el.nativeElement, this.addClass);
    }

    private removeSticky() {
        this.stuck = false;
        this.el.nativeElement.style.position = '';
        this.render.removeClass(this.el.nativeElement, this.addClass);
    }

    private offsetIsDerivedFromParent() {
        return this.getOffsetTopFromParent && this.el.nativeElement.offsetParent;
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        const offset = this.offsetIsDerivedFromParent() ? this.el.nativeElement.offsetParent.offsetTop : this.el.nativeElement.offsetTop;

        this.windowOffsetTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (this.selectedOffset === 0) this.selectedOffset = offset;

        if (this.stuck === false) this.selectedOffset = offset;

        if ((this.windowOffsetTop + this.offSet) > this.selectedOffset) {
            this.addSticky();
        } else {
            this.removeSticky();
        }
    }
}