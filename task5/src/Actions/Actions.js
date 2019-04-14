import axios from 'axios';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export function receiveMovies(movies) {
    return {
        type: RECEIVE_MOVIES,
        movies
    }
}

export const LOAD_MOVIES = 'LOAD_MOVIES';

export function loadMovies(search, searchBy, sortBy) {
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

    return function (dispatch) {
        return axios.get(request)
            .then(response => dispatch(receiveMovies(response.data.data)));
    }
}

export const SORT_BY = 'SORT_BY';

export function sortBy(field) {
    return {
        type: SORT_BY,
        field
    }
}


export const SEARCH_BY = 'SEARCH_BY';

export function searchBy(field) {
    return {
        type: SEARCH_BY,
        field
    }
}

export const SEARCH_TEXT = 'SEARCH_TEXT';

export function searchText(text) {
    return {
        type: SEARCH_TEXT,
        text
    }
}
