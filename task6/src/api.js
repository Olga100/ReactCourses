import * as React from 'react';
import axios from 'axios';

export function getMovies(search, searchBy, sortBy) {
    let params = [];

    if (search) {
        params.push(`search=${search}`);
    }

    if (searchBy) {
        params.push(`searchBy=${searchBy}`);
    }

    if (sortBy) {
        params.push(`sortBy=${sortBy}`);
        params.push('sortOrder=desc');
    }

    let request = 'https://reactjs-cdp.herokuapp.com/movies?' + params.join('&');

    return axios.get(request)
            .then(res => {
                return res.data;
            });
}

export function getMovie(id) {
    return axios.get('https://reactjs-cdp.herokuapp.com/movies/' + id)
        .then(res => { return res.data });
}

export function getMoviesByGenres(genres) {
    return axios.get('https://reactjs-cdp.herokuapp.com/movies?searchBy=genres&filter=' + genres)
        .then(res => { return res.data.data });
}
