import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MovieType, tvType } from "shared/enums";
import { environment } from "src/environments/environment";
import { MovieRes, TrailerRes } from "../model/movie.model";

const dbUrl = environment.apiConfig.apiUrl;
const apiKey = environment.apiConfig.apiKey;

@Injectable({ providedIn: 'root' })
export class HomeService {
    readonly _movies$ = new Subject<MovieRes[]>();
    readonly _topMovies$ = new Subject<MovieRes[]>();
    readonly _tvSeries$ = new Subject<MovieRes[]>();
    readonly _topTvSeries$ = new Subject<MovieRes[]>();
    readonly _trailer$ = new Subject<TrailerRes>();
    readonly _similar$ = new Subject<MovieRes[]>();

    constructor(
        private http: HttpClient
    ) { }

    fetchMovies(type: string, params = {}) {
        return this.http.get<any>(`${dbUrl}/movie/${type}`, {
            params: {
                page: 1,
                api_key: apiKey
            }
        }).subscribe(response => {
            switch (type) {
                case MovieType.popular:
                    this._movies$.next(response?.results);
                    break;
                default:
                    return this._topMovies$.next(response?.results);
            }
        })
    }

    fetchTvList(type: string, params = {}) {
        return this.http.get<any>(`${dbUrl}/tv/${type}`, {
            params: {
                api_key: apiKey
            }
        }).subscribe(response => {
            switch (type) {
                case tvType.popular:
                    this._tvSeries$.next(response?.results);
                    break;
                default:
                    return this._topTvSeries$.next(response.results);
            }
        })
    }

    getTrailers(category: string, id: number) {
        return this.http.get<any>(`${dbUrl}/${category}/${id}/videos`, {
            params: {
                api_key: apiKey
            }
        })
            .subscribe(response => {
                return this._trailer$.next(response?.results[0]);

            })
    }

    getSimilar(category: string, id: number) {
        return this.http.get<any>(`${dbUrl}/${category}/${id}/similar`, {
            params: {
                api_key: apiKey
            }
        })
            .subscribe(response => {
                return this._similar$.next(response?.results);
            })
    }
}