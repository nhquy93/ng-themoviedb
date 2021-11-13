import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SharedModule } from "shared/shared.module";
import { CatalogRoutingModule } from "./catalog-routing.module";
import { CatalogComponent } from "./catalog.component";
import { PageHeaderComponent, MovieGridComponent } from './components';
import { CatalogService } from "./services/catalog.service";

@NgModule({
    declarations: [
        CatalogComponent,
        PageHeaderComponent,
        MovieGridComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        CatalogRoutingModule,
        SharedModule
    ],
    providers: [
        CatalogService
    ]
})
export class CatalogModule { }