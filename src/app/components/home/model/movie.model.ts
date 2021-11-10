export class MovieRes {
    id: number = 0;
    adult: boolean = false;
    backdrop_path: string = '';
    genre_ids = [];
    original_language: string = '';
    original_title: string = '';
    overview: string;
    popularity: number = 0;
    poster_path: string = '';
    release_date: string = '';
    title: string = '';
    video?
    vote_average?
    vote_count?
}

export class TrailerRes {
    id: string = "";
    key: string = "";
    name: string = "";
    published_at: string = "";
    site: string = "";
    size: number = 0;
    type: string = "";
    iso_639_1?;
    iso_3166_1?;
    official?;
}