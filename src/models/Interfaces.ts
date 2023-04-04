export interface TMedia {
    adult: boolean,
    backdrop_path: string,
    id: number,
    title: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: number[],
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
};

export interface TMediaState {
    tmedia: TMedia[],
    loading: boolean,
    error: Error | null
};

export interface ISearchState {
    searches: TMedia[],
    loading: boolean,
    error: Error | null
};

export type MovieID = number;

export interface FavoriteState {
    favorites:  MovieID[]
};

