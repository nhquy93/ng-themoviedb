import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Category, MovieType } from "shared/enums";
import { environment } from "src/environments/environment";
import { MovieRes, TrailerRes } from "../model/movie.model";

const dbUrl = environment.apiConfig.apiUrl;
const apiKey = environment.apiConfig.apiKey;

@Injectable({ providedIn: 'root' })
export class HomeService {
    readonly _movies$ = new Subject<MovieRes[]>();
    readonly _trailer$ = new Subject<TrailerRes>();

    constructor(
        private http: HttpClient
    ) { }

    fetchMovies(type = MovieType.popular, params = {}) {
        return this.http.get<any>(`${dbUrl}/movie/${type}`, {
            params: {
                page: 1,
                api_key: apiKey
            }
        }).subscribe(response => {
            return this._movies$.next(response?.results.slice(0, 4));
        })
    }

    getTrailers(category = Category.movie, id: number) {
        return this.http.get<any>(`${dbUrl}/${category}/${id}/videos`, {
            params: {
                api_key: apiKey
            }
        })
            .subscribe(response => {
                return this._trailer$.next(response?.results[0]);

            })
    }
}