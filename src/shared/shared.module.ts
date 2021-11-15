import { NgModule } from "@angular/core";
import { ButtonModule } from "./components/button/button.module";
import { CardModule } from "./components/card/card.module";
import { ModalModule } from "./components/modal/modal.module";
import { SearchModule } from "./components/search/search.module";
import { DirectivesModule } from "./directives/directives.module";

const modules = [
    ModalModule,
    ButtonModule,
    CardModule,
    SearchModule,
    DirectivesModule
];

@NgModule({
    imports: [
        ...modules,
    ],
    exports: [
        ...modules
    ]
})

export class SharedModule { }