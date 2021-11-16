import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SharedModule } from "shared/shared.module";
import { SwiperModule } from "swiper/angular";
import { CastListComponent, MovieListComponent, VideoItemComponent, VideoListComponent } from "./components";
import { DetailRoutingModule } from "./detail-routing.module";
import { DetailComponent } from "./detail.component";
import { DetailService } from "./services/detail.service";

@NgModule({
    declarations: [
        DetailComponent,
        CastListComponent,
        VideoListComponent,
        VideoItemComponent,
        MovieListComponent
    ],
    imports: [
        CommonModule,
        SwiperModule,
        HttpClientModule,
        DetailRoutingModule,
        SharedModule
    ],
    providers: [
        DetailService
    ]
})
export class DetailModule { }