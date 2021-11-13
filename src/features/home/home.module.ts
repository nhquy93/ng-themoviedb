import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SharedModule } from "shared/shared.module";
import { SwiperModule } from "swiper/angular";
import { MovieListComponent, MovieSlideComponent } from "./components";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HomeService } from "./services/home.service";

@NgModule({
    declarations: [
        HomeComponent,
        MovieSlideComponent,
        MovieListComponent
    ],
    imports: [
        CommonModule,
        SwiperModule,
        HttpClientModule,
        HomeRoutingModule,
        SharedModule
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule { }