import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieRes } from "features/home/model/movie.model";
import { Subscription } from "rxjs";
import { environment } from "src/environments/environment";
import { CastRes, DetailRes, GenreRes, TrailerRes } from "./model/detail.model";
import { DetailService } from "./services/detail.service";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
    env = environment.apiConfig;
    private subs: Subscription[];
    category: string;
    detail: DetailRes;
    casts: CastRes[] = [];
    videos: TrailerRes[] = [];
    genres: GenreRes[] = [];
    movies: MovieRes[] = [];

    constructor(
        private _route: ActivatedRoute,
        private detailService: DetailService
    ) {
        this._route.params.subscribe(params => {
            this.category = params?.cateType;
            this.detailService.getDetail(params?.cateType, params?.id);
            this.detailService.getCredits(params?.cateType, params?.id);
            this.detailService.getVideos(params?.cateType, params?.id);
            this.detailService.getMovies(params?.cateType, params?.id);
        });
    }

    ngOnInit(): void {
        this.subs = [
            this.detailService._detail$.subscribe(detail => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                this.detail = detail;
                this.genres = detail?.genres?.slice(0, 5);
            }),
            this.detailService._casts$.subscribe(casts => {
                this.casts = casts;
            }),
            this.detailService._videos$.subscribe(videos => {
                this.videos = videos;
            }),
            this.detailService._movies$.subscribe(movies => {
                this.movies = movies;
            }),
        ];
    }

    ngOnDestroy(): void {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    bgImg(image: any, mode?) {
        let _url = image ? (mode ? this.env.originalImage(image) : this.env.w500Image(image)) : 'assets/image-not-found.png';
        return {
            'background-image': `url(${_url})`
        };
    }
}