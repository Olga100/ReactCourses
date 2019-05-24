// @flow
export type Movie = {
    id: number,
    title: string,
    poster_path: string,
    release_date: string,
    genres: Array<string>,
    runtime: number,
    overview: string,
    tagline: string
};
