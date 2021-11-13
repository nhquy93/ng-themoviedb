import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogComponent } from "./catalog.component";

const moduleRoutes: Routes = [
    { path: '', component: CatalogComponent }
];

@NgModule({
    imports: [RouterModule.forChild(moduleRoutes)],
    exports: [RouterModule]
})

export class CatalogRoutingModule { }