import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[appInput]'
})
export class InputDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.border = 0;
        el.nativeElement.style.backgroundColor = '#000';
        el.nativeElement.style.padding = '.5rem 1.5rem';
        el.nativeElement.style.fontSize = '1rem';
        el.nativeElement.style.borderRadiusLeftTop = '10px';
        el.nativeElement.style.borderRadiusLeftBottom = '10px';
        el.nativeElement.style.color = '#fff';
        el.nativeElement.style.fontFamily = '"Montserrat", sans-serif';
    }
}