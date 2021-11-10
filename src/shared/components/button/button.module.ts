import { NgModule } from "@angular/core";
import { CustomButtonComponent } from "./button.component";

@NgModule({
    declarations: [
        CustomButtonComponent
    ],
    exports: [
        CustomButtonComponent
    ],
})
export class ButtonModule { }