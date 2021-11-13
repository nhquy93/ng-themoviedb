import { NgModule } from "@angular/core";
import { ButtonModule } from "../button/button.module";
import { CardComponent } from "./card.component";

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        ButtonModule
    ],
    exports: [
        CardComponent
    ],
})
export class CardModule { }