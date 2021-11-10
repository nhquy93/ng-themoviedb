import { NgModule } from "@angular/core";
import { PipesModule } from "shared/pipes/pipes.module";
import { SafePipe } from "shared/pipes/safe.pipe";
import { ModalComponent } from "./modal.component";

@NgModule({
    declarations: [
        ModalComponent
    ],
    imports: [
        PipesModule
    ],
    exports: [
        ModalComponent
    ],
})
export class ModalModule { }