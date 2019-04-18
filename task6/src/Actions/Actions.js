import axios from 'axios';

import {RECEIVE_MOVIES, SORT_BY, SEARCH_BY, SEARCH_TEXT} from'../constants';


export function receiveMovies(movies) {
    return {
        type: RECEIVE_MOVIES,
        movies
    }
}

export function loadMovies(request) {
    return function (dispatch) {
        return axios.get(request)
            .then(response => dispatch(receiveMovies(response.data.data)));
    }
}

export function sortBy(field) {
    return {
        type: SORT_BY,
        field
    }
}

export function searchBy(field) {
    return {
        type: SEARCH_BY,
        field
    }
}

export function searchText(text) {
    return {
        type: SEARCH_TEXT,
        text
    }
}

export function  selectedMovie(movie) {
    return {
        type: 'SELECTED_MOVIE',
        movie
    }
}
