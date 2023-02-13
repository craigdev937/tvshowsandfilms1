export interface IMedia {
    adult: boolean,
    backdrop_path: string,
    id: number,
    imdb_id: string,
    title: string,
    homepage: string,
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

export interface IMediaState {
    films: IMedia[],
    loading: boolean,
    error: Error | null
};

export interface ISearchState {
    searchText: string,
    searches: IMedia[],
    loading: boolean,
    error: Error | null
};


