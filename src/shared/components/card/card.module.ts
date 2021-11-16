import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "../button/button.module";
import { CardComponent } from "./card.component";

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        ButtonModule,
        RouterModule
    ],
    exports: [
        CardComponent
    ],
})
export class CardModule { }