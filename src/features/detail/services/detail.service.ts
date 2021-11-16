import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MovieRes } from "features/home/model/movie.model";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { CastRes, DetailRes, TrailerRes } from "../model/detail.model";

const dbUrl = environment.apiConfig.apiUrl;
const apiKey = environment.apiConfig.apiKey;

@Injectable({ providedIn: 'root' })
export class DetailService {
    readonly _detail$ = new Subject<DetailRes>();
    readonly _videos$ = new Subject<TrailerRes[]>();
    readonly _casts$ = new Subject<CastRes[]>();
    readonly _movies$ = new Subject<MovieRes[]>();

    constructor(
        private http: HttpClient
    ) { }

    getDetail(type: string, id: number, params?) {
        return this.http.get<any>(`${dbUrl}/${type}/${id}`, {
            params: {
                ...params,
                api_key: apiKey
            }
        }).subscribe(response => {
            this._detail$.next(response);
        });
    }

    getCredits(type: string, id: number, params?) {
        return this.http.get<any>(`${dbUrl}/${type}/${id}/credits`, {
            params: {
                ...params,
                api_key: apiKey
            }
        }).subscribe(response => {
            this._casts$.next(response?.cast?.slice(0, 5));
        });
    }

    getVideos(type: string, id: number, params?) {
        return this.http.get<any>(`${dbUrl}/${type}/${id}/videos`, {
            params: {
                ...params,
                api_key: apiKey
            }
        }).subscribe(response => {
            this._videos$.next(response?.results?.slice(0, 5));
        });
    }

    getMovies(type: string, id: number, params?) {
        return this.http.get<any>(`${dbUrl}/${type}/${id}/similar`, {
            params: {
                ...params,
                api_key: apiKey
            }
        }).subscribe(response => {
            this._movies$.next(response?.results);
        });
    }
}