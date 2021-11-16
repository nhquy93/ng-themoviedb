export class DetailRes {
    id: number = 0;
    imdb_id: string = '';
    adult: boolean = false;
    backdrop_path: string = '';
    poster_path: string = '';
    budget: number = 0;
    original_language: string = 'en';
    original_title: string = '';
    overview: string = '';
    popularity: number = 0;
    release_date: string = '';
    revenue: number = 0;
    status: string = '';
    tagline: string = '';
    title: string = '';
    genres = [new GenreRes()];
    name?;
    production_companies?;
    production_countries?;
    video?;
    spoken_languages?;
    runtime?;
    homepage?;
    belongs_to_collection?;
    vote_average?;
    vote_count?;
}

export class GenreRes {
    id?;
    name?;
}

export class CastRes {
    id: number = 0;
    adult: boolean = false;
    cast_id: number = 0;
    character: string = '';
    credit_id: string = '';
    gender: number = 0;
    name: string = '';
    order: number = 0;
    original_name: string = '';
    popularity?;
    profile_path: string = '';
    known_for_department?;
}

export class TrailerRes {
    id: string = "";
    key: string = "";
    name: string = "";
    published_at: string = "";
    site: string = "";
    size: number = 720;
    type: string = "Trailer";
    iso_639_1?;
    iso_3166_1?;
    official?;
}