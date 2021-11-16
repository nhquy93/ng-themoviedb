import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail.component";

const moduleRoutes: Routes = [
    { path: '', component: DetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(moduleRoutes)],
    exports: [RouterModule]
})

export class DetailRoutingModule { }