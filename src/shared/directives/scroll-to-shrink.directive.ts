import { DOCUMENT } from '@angular/common';
import { Directive, HostBinding, HostListener, Inject } from '@angular/core';

@Directive({
    selector: '[scrollToShrink]'
})
export class ScrollToShrinkDirective {
    @HostBinding('class.shrink') shrink = "";

    constructor(@Inject(DOCUMENT) private document: Document) { }

    @HostListener('window:scroll', [])
    
    onScroll() {
        if(this.document.body.scrollTop > 100 || this.document.documentElement.scrollTop > 100) {
            this.shrink = "shrink";
        } else {
            this.shrink = ""
        }
    }
}