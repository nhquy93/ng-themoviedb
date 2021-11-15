import { NgModule } from "@angular/core";
import { DirectivesModule } from "shared/directives/directives.module";
import { ButtonModule } from "../button/button.module";
import { SearchComponent } from "./search.component";

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        ButtonModule,
        DirectivesModule
    ],
    exports: [
        SearchComponent
    ]
})

export class SearchModule { }