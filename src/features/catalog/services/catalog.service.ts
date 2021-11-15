import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MovieRes } from "features/home/model/movie.model";
import { Subject } from "rxjs";
import { Category } from "shared/enums";
import { environment } from "src/environments/environment";

const dbUrl = environment.apiConfig.apiUrl;
const apiKey = environment.apiConfig.apiKey;

@Injectable({providedIn: 'root'})
export class CatalogService {
    readonly _movies$ = new Subject<MovieRes[]>();
    readonly _tvSeries$ = new Subject<MovieRes[]>();
    readonly _currentPage$ = new Subject<number>();
    readonly _totalPages$ = new Subject<number>();

    constructor(
        private http: HttpClient
    ) { }

    fetchMovies(type: string, params?) {
        return this.http.get<any>(`${dbUrl}/movie/${type}`, {
            params: {
                ...params,
                api_key: apiKey
            }
        }).subscribe(response => {
            this._movies$.next(response?.results);
            this._currentPage$.next(response?.page);
            this._totalPages$.next(response?.total_pages);
        })
    }

    fetchTvList(type: string, params?) {
        return this.http.get<any>(`${dbUrl}/tv/${type}`, {
            params: {
                ...params,
                api_key: apiKey
            }
        }).subscribe(response => {
            this._tvSeries$.next(response?.results);
            this._currentPage$.next(response?.page);
            this._totalPages$.next(response?.total_pages);
        })
    }

    filterMoviesByQueryParams(type: string, params?) {
        return this.http.get<any>(`${dbUrl}/search/${type}`, {
            params: {
                ...params,
                api_key: apiKey
            }
        }).subscribe(response => {
            if(type === Category.tv) {
                this._tvSeries$.next(response?.results);
            } else {
                this._movies$.next(response?.results);
            };
            this._currentPage$.next(response?.page);
            this._totalPages$.next(response?.total_pages);
        })
    }
}