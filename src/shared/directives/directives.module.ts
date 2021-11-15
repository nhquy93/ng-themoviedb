import { NgModule } from "@angular/core";
import { InputDirective } from "./input.directive";
import { ScrollToShrinkDirective } from "./scroll-to-shrink.directive";

const directives = [
    InputDirective,
    ScrollToShrinkDirective
];

@NgModule({
    declarations: [
        ...directives,
    ],
    exports: [
        ...directives
    ]
})

export class DirectivesModule { }